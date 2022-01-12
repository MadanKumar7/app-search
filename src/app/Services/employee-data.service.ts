import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/Employee.model';

@Injectable({
	providedIn: 'root'
})
export class EmployeeDataService {

	employeeDetails$ = new BehaviorSubject<Employee[]>([]);

	constructor(
		private db: AngularFireDatabase
	) { }

	public fetchEmployeeDetails(){
		this.db.list('employees').valueChanges().subscribe((res:any[]) => {
			this.setEmployeeDeatils(res);
			let employees: Employee[] = res;
			localStorage.setItem('employeeData', JSON.stringify(employees));
		}, (err: any) => {
			console.log(err);
		});
	}

	public getEmployeeDetails() {
		return this.employeeDetails$;
	}

	public setEmployeeDeatils(empDetails: Employee[]){
		console.log(empDetails);
		this.employeeDetails$.next(empDetails);
		console.log(this.employeeDetails$);

	}
}
