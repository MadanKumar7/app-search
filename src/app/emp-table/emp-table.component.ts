import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../models/Employee.model';
import { EmployeeDataService } from '../Services/employee-data.service';
import { PaginationComponent } from '../shared-components/pagination/pagination.component';
import { EmpTableCols } from '../utils/emp-table-cols';
import { Sort } from '../utils/sorting';

@Component({
	selector: 'app-emp-table',
	templateUrl: './emp-table.component.html',
	styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent implements OnInit {

	@ViewChild('paginationTop') paginationTop!: PaginationComponent;
	@ViewChild('paginationBtm') paginationBtm!: PaginationComponent;

	employeeDetails: Employee[] = [];
	employeeRows: Employee[] = [];
	filteredRows: Employee[] = [];
	employeeCols:any = [];
	paginationValues = {
		start:0,
		end: 0,
		totalRecords:0,
		limit:0
	}
	isFiltered = false;
	dataReady = false;
	employeeColForm!: FormGroup;

	constructor(
		private empDataSvc: EmployeeDataService,
		private empTableCols: EmpTableCols,
		private sorting: Sort,
		private db: AngularFireDatabase,
		private datePipe: DatePipe,
		private fb:FormBuilder
	) { }

	ngOnInit(): void {
		this.employeeCols = this.empTableCols.getempTableCols();
		this.initiateEmpColForm();
		this.getEmployeeDetails();
		this.initializeTable();
	}

	getEmployeeDetails() {
		this.employeeDetails = JSON.parse(localStorage.getItem('employeeData') || '[]')  as Employee[];
		if(this.employeeDetails.length === 0){
			this.empDataSvc.getEmployeeDetails().subscribe(
				(res:any)=> {
					if(res.length > 0){
						this.employeeDetails = res;
					}
				}
			);
		}
		
	}

	initiateEmpColForm(){
		// //Create a form group for each item in the employee columns
		const formGroups = this.employeeCols.map((col:any) => {
			// return this.fb.group(col)
			return this.fb.group({
				filterValue: this.fb.control(col.filterValue)
			})
		});
		
		//Create a form array for this group
		const formArray = this.fb.array(formGroups);
		// Create a top level form
		this.employeeColForm = this.fb.group({
			empColArray: formArray
		});
		
	}

	initializeTable(){
		let totalRecords = this.employeeDetails.length;
		if(totalRecords){
			let pageObj = {...this.paginationValues}
			pageObj.start = Math.min(1, totalRecords);
			pageObj.end = Math.min(10, totalRecords);
			pageObj.limit = 10;
			pageObj.totalRecords = totalRecords;
			this.paginationValues = {...pageObj}
			// this.paginationTop?.setLimit(totalRecords);
			// this.paginationBtm?.setLimit(totalRecords);
			this.employeeRows = this.employeeDetails.slice(0, this.paginationValues.limit);
		}
		this.dataReady = true;
	}

	changeRowLimit(pageValues:any){
		this.paginationValues = pageValues;
		this.startPagination(this.paginationValues);
	}

	startPagination(pagination:any){
		let {start, end} = pagination;
		this.employeeRows = this.employeeDetails.slice(start-1, end);
	}

	sortColumn(prop:string, order:string, type:string = ''){
		let sortedArray = [...this.employeeDetails];
		sortedArray = sortedArray.sort(this.sorting.sortData(prop, order, type));
		this.employeeDetails = [...sortedArray];
		this.initializeTable();

		this.employeeCols.forEach((element:any) => {
			element.order = 'default';
			if(element.prop === prop){
				element.order = order;
			}
		});

	}

	applyFilter(e: Event, columnName:any = ''){
		console.log(this.employeeColForm)
		let target = e.target as HTMLInputElement,
			targetVal = target.value;
		this.isFiltered = false;

		this.filteredRows = [...this.employeeDetails];
		this.updateFilterValueToColumn(targetVal, columnName);

		this.employeeCols.forEach((col:any) => {
			if(col.filterValue){
				this.isFiltered = true;
				this.filteredRows = this.filteredRows.filter((record:any) => {
					if(col.type === 'date'){
						record[col.prop] = this.datePipe.transform(record[col.prop], 'MM/dd/yyyy');
					}else if(col.type === 'number' || col.type === 'currency'){
						record[col.prop] = record[col.prop].toString()
					}

					if(record[col.prop] && record[col.prop].toLowerCase().indexOf(col.filterValue.toLowerCase()) !== -1){
						return true;
					}
					return false;
				})
			}
		});

		if(!this.isFiltered){
			this.filteredRows = [];
		}

		if(this.filteredRows.length === 0){
			if(this.isFiltered){
				this.showEmptyTable();
			}else{
				this.showOriginalTable()
			}
		}else{
			this.showFilteredTable();
		}
	}

	updateFilterValueToColumn(filterVal:string, columnName:string){
		this.employeeCols.forEach((item:any) => {
			if(item.prop === columnName){
				item.filterValue = filterVal;
			}
		});
	}

	showEmptyTable(){
		this.employeeRows = [];
		let noResults: any = {};
		this.employeeRows.push(noResults);
		const totalRecords = 0;
		this.updatePaginationValues(totalRecords);
		this.setPaginationLimit(this.paginationValues.totalRecords);
		// setTimeout(() => {
		// 	this.filteredRows.splice(0,1)
		// }, 1);
	}

	showOriginalTable(){
		this.employeeRows = [];
		const totalRecords = this.employeeDetails.length;
		this.updatePaginationValues(totalRecords);
		this.employeeRows = this.employeeDetails.slice(this.paginationValues.start-1, this.paginationValues.limit);
		this.setPaginationLimit(totalRecords);
	}

	showFilteredTable(){
		this.employeeRows = [];
		this.employeeRows = [...this.filteredRows];
		const totalRecords = this.filteredRows.length;
		this.updatePaginationValues(totalRecords);
		this.employeeRows = this.filteredRows.slice(this.paginationValues.start-1, this.paginationValues.limit);
		this.setPaginationLimit(totalRecords);
	}

	updatePaginationValues(totalRecords:number){
		if(totalRecords){
			this.paginationValues = {
				start: Math.min(1, totalRecords),
				end: Math.min(10, totalRecords),
				limit: 10,
				totalRecords : totalRecords
			};
		} else{
			this.paginationValues = {
				start:0,
				end: 0,
				totalRecords:0,
				limit:0
			};
		}
	}

	setPaginationLimit(totalRecords:number){
		this.paginationTop?.setLimit(totalRecords);
		this.paginationBtm?.setLimit(totalRecords);
	}

	clearFilters(){
		this.isFiltered = false;
		this.removeFilterValuesFromColumns();
		this.showOriginalTable();
		this.employeeColForm.reset();
	}

	removeFilterValuesFromColumns(){
		this.employeeCols.forEach((item:any) => {
			item.filterValue = '';
		});
	}

}
