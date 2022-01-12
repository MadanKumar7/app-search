import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee.model';
import { CategoryList } from '../utils/category.list';

@Injectable({
	providedIn: 'root'
})
export class DataFilterService {

	constructor(
		private categoryList:CategoryList
	) { }

	stringFilterData(data: Employee[], prop:string, value:any, propType:string): number{
		if(propType === 'string'){
			return data.filter((emp: any) => {
				return emp[prop] === value;
			}).length;
		}
		return 0;
		
	}
	
}
