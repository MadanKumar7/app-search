import { AlertComponent } from './../shared-components/alert/alert.component';
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
export class EmpTableComponent implements OnInit, AfterViewInit {

	@ViewChild('paginationTop') paginationTop!: PaginationComponent;
	@ViewChild('paginationBtm') paginationBtm!: PaginationComponent;
	@ViewChild('openAlert') openAlert!: ElementRef;
	@ViewChild('openForm') openForm!: ElementRef;


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
	employeeColForm!: FormGroup;
	alertTitle:string = '';
	alertMessage:string = '';
	primaryButton:string = '';
	secondaryButton:string = '';
	detailsObj:any;
	formFields:any;

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
		// this.getTodaysDate();
	}

	ngAfterViewInit(){
		this.db.list('employees').valueChanges().subscribe((res:any[]) => {
			this.employeeDetails = res;
			this.initializeTable();
		},(err:any) => {
			console.log(err)
		});
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
			this.paginationTop?.setLimit(totalRecords);
			this.paginationBtm?.setLimit(totalRecords);
			this.employeeRows = this.employeeDetails.slice(0, this.paginationValues.limit);
		}
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

	handleAction(action:string, row:Employee){
		if(action === 'delete'){
			if(this.openAlert){
				this.alertTitle = 'Confirm your action';
				this.alertMessage = 'Are you sure that you want to permanently delete the record?';
				this.primaryButton = 'Yes';
				this.secondaryButton = 'Cancel';
				this.openAlert.nativeElement.click();
			}
		}else if(action === 'edit'){
			if(this.openForm){
				this.alertTitle = 'Employee details edit form';
				this.alertMessage = 'Are you sure that you want to permanently delete the record?';
				this.primaryButton = 'Save';
				this.secondaryButton = 'Cancel';
				this.detailsObj = row;
				this.setFormFields();
				this.openForm.nativeElement.click();
			}
		}
	}

	setFormFields(){
		this.formFields = [
			{label:'First Name', name:'firstName', type:'text', required:true, pattern:'^[a-zA-Z]*$'},
			{label:'Last Name', name:'lastName', type:'text', required:true, pattern:'^[a-zA-Z]*$'},
			{label:'DOB', name:'dob', type:'date', minDate:null, maxDate:this.getValid18YearsDate(), required:true, pattern:null, placeholder:'MM/DD/YYYY'},
			// {label:'Age', name:'age', type:'text', required:true, disabled:true, pattern:null},
			{label:'Gender', name:'gender', type:'radioButton', options:this.getGenderOptions(), required:true, pattern:null},
			{label:'Phone Number', name:'phoneNumber', type:'text', required:true, pattern:'^\d{3}-\d{4}-\d{2}', placeholder:'000-0000-00'},
			{label:'Email', name:'email', type:'text', required:true, pattern:'^[a-zA-Z]*$'},
			{label:'SSN', name:'ssn', type:'text', required:true, pattern:'^\d{3}-\d{4}-\d{2}', placeholder:'000-0000-00'},
			{label:'Position', name:'position', type:'text', required:true, pattern:'^[a-zA-Z ]*$'},
			{label:'Department', name:'department', type:'text', required:true, pattern:'^[a-zA-Z ]*$'},
			{label:'Experience', name:'experience', type:'number', required:true, pattern:null, negativeAllowed: false},
			{label:'Salary', name:'salary', type:'currency', required:true, pattern:null},
			{label:'Policy Number', name:'policyNumber', type:'number', required:true, pattern:'^\d{7}', negativeAllowed: false},
			{label:'Account Number', name:'accountNumber', type:'number', required:true, pattern:'^\d{10}', negativeAllowed: false},
			{label:'Bank Name', name:'bankName', type:'text', required:true, pattern:'^[a-zA-Z ]*$'},
			{label:'State', name:'state', type:'select', options:this.getAllStates(), required:true, pattern:null},
			{label:'Maritial Status', name:'maritialStatus', type:'radioButton', options:this.getMaritialStatus(), required:true, pattern:null}
		]
	}

	getValid18YearsDate(){
		let today = new Date();
		return new Date(today.getFullYear()-18, today.getMonth(), today.getDate());
	}

	getAllStates(){
		return ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
		"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
		"SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
	}

	getGenderOptions(){
		return [
			{
				value:'Female',
				selected: true
			},
			{
				value:'Male',
				selected: false
			},
			{
				value:'Other',
				selected: false
			}
		]
	}

	getMaritialStatus(){
		return [
			{
				value:'Married',
				selected: true
			},
			{
				value:'Single',
				selected: false
			}
		]
	}

}
