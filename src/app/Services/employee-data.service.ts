import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmployeeDataService {

	constructor(private http: HttpClient) { }


	public getEmpJSON() {
		return this.http.get("./assets/employees-details.json")
	}
}
