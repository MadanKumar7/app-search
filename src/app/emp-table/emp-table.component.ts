import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
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

	employeeDetails: Employee[] = [];
	employeeRows: Employee[] = [];
	employeeCols:any = [];
	paginationValues = {
		start:0,
		end: 0,
		totalRecords:0,
		limit:0
	}

	constructor(
		private empDataSvc: EmployeeDataService,
		private empTableCols: EmpTableCols,
		private sorting: Sort,
		private db: AngularFireDatabase
	) { }

	ngOnInit(): void {
		this.employeeCols = this.empTableCols.getempTableCols();
		
	}

	ngAfterViewInit(){
		this.db.list('employees').valueChanges().subscribe((res:any[]) => {
			this.employeeDetails = res;
			this.initializeTable();
		},(err:any) => {
			console.log(err)
		});
	}

	initializeTable(){
		let totalRecords = this.employeeDetails.length
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

	sortColumn(prop:string, order:string){
		let sortedArray = [...this.employeeDetails];
		sortedArray = sortedArray.sort(this.sorting.sortData(prop, order));
		this.employeeDetails = [...sortedArray];
		this.initializeTable();

		this.employeeCols.forEach((element:any) => {
			element.order = 'default';
			if(element.prop === prop){
				element.order = order;
			}
		});

	}

}
