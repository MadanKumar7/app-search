import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Category } from '../models/Category.model';
import { Employee } from '../models/Employee.model';
import { CategoriesService } from '../Services/categories.service';
import { EmployeeDataService } from '../Services/employee-data.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	// arr = [
	// 	{"name": "Male", "value": 101},
	// 	{"name": "Female", "value": 99}
	// ]
	// view: any = [200, 400];

	// // options
	// gradient: boolean = true;
	// showLegend: boolean = true;
	// showLabels: boolean = true;
	// isDoughnut: boolean = true;
	// legendPosition: string = 'below';

	// colorScheme:any = {
	// 	domain: ['#5AA454', '#A10A28']
	// };

	employeeDetails: Employee[] = [];
	categoryData: any = {};
	categoryDataReady = false;

	constructor(
		private empDataSvc: EmployeeDataService,
		private categorySvc: CategoriesService
	) { }

	ngOnInit(): void {
		this.initiateAppState();
	}

	async initiateAppState(){
		await this.empDataSvc.fetchEmployeeDetails();
		this.empDataSvc.getEmployeeDetails().subscribe(
			(res:Employee[]) => {
				this.employeeDetails = res;
				if(this.employeeDetails.length > 0){
					this.categoryData = this.categorySvc.fetchCategoryWiseDetails(this.employeeDetails);
					console.log(this.categoryData);
					this.categoryDataReady = true;
				}
			});
	}


	onSelect(data:any): void {
		console.log('Item clicked', JSON.parse(JSON.stringify(data)));
	  }
	
	  onActivate(data:any): void {
		console.log('Activate', JSON.parse(JSON.stringify(data)));
	  }
	
	  onDeactivate(data:any): void {
		console.log('Deactivate', JSON.parse(JSON.stringify(data)));
	  }
}
