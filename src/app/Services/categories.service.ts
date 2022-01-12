import { Injectable } from '@angular/core';
import { Category } from '../models/Category.model';
import { Employee } from '../models/Employee.model';
import { CategoryList } from '../utils/category.list';
import { DataFilterService } from './data-filter.service';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	employeeDetails: Employee[] = [];

	constructor(
		private dataFilterSvc: DataFilterService,
		private categoryList:CategoryList
	) { }

	fetchCategoryWiseDetails(employeeDetails:Employee[]):Category {
		this.employeeDetails = employeeDetails;
		return {
			gender: this.getGenderData(),
			state: this.getStateData(),
			age: this.getAgeData(),
			department: this.getDepartmentData(),
			experience: this.getExperienceData(),
			salary: this.getSalaryData(),
		}
	}

	getGenderData(){
		let resultArray:any = [],
		list = this.categoryList.getNameList('gender');
		list.forEach(listObj => {
			listObj.value = this.dataFilterSvc.stringFilterData(this.employeeDetails, 'gender', listObj.prop, 'string');
			resultArray.push(
				{'name': listObj.name, 'value': listObj.value}
			)
		});
		return resultArray;
	}

	getStateData(){
		let resultArray:any = []
		return resultArray;
	}

	getAgeData(){
		let resultArray:any = []
		return resultArray;
	}

	getDepartmentData(){
		let resultArray:any = []
		return resultArray;
	}

	getExperienceData(){
		let resultArray:any = []
		return resultArray;
	}

	getSalaryData(){
		let resultArray:any = []
		return resultArray;
	}
}
