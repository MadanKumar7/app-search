import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee.model';
import { EmployeeDataService } from '../Services/employee-data.service';
import { EmpTableCols } from '../utils/emp-table-cols';

@Component({
	selector: 'app-emp-table',
	templateUrl: './emp-table.component.html',
	styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent implements OnInit {

	employeeRows: Employee[] = []
	employeeCols:any = [];
	rowLimit = 10;

	constructor(
		private empDataSvc: EmployeeDataService,
		private empTableCols: EmpTableCols
	) { }

	ngOnInit(): void {
		this.empDataSvc.getEmpJSON().subscribe((data: any) => {
			this.employeeRows = data.employees;
		});

		this.employeeCols = this.empTableCols.getempTableCols();
	}

}
