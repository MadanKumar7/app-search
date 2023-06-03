import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CommonService {

	private isLoader = new BehaviorSubject<boolean>(false);

	constructor() { }

	setLoader(isLoader:boolean){
		this.isLoader.next(isLoader);
	}

	getLoader(){
		return this.isLoader;
	}
	
}
