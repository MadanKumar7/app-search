import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Output() changeRowLimit: EventEmitter<{}> = new EventEmitter();
	@Output() pagination: EventEmitter<{}> = new EventEmitter();

	@Input() paginationValues = {
		start: 0,
		end:0,
		totalRecords: 0,
		limit: 0
	}

	limitArray:any[] = [];

	constructor() { }

	ngOnInit(): void {
	}

	emitChangeRowLimit(event:any){
		let value = Number(event.target.value);
		this.paginationValues.start = Math.min(1, this.paginationValues.totalRecords);
		this.paginationValues.end = Math.min(value, this.paginationValues.totalRecords);
		this.paginationValues.limit = value;
		this.changeRowLimit.emit(this.paginationValues);
	}

	setLimit(totalRecords:number){
		this.limitArray = [];
		if(totalRecords < 10){
			this.limitArray.push(10);
		}else if(totalRecords && totalRecords <= 30){
			for(let i=10; i<=totalRecords; i+=5){
				this.limitArray.push(i);
			}
		}else if(totalRecords && totalRecords > 30){
			for(let i=10; i<=30; i+=5){
				this.limitArray.push(i);				
			}
		}

	}

	gotoPrevious(){
		this.paginationValues.start -= this.paginationValues.limit;
		if(this.paginationValues.end === this.paginationValues.totalRecords){
			this.paginationValues.end = this.paginationValues.start + this.paginationValues.limit -1;
		}else{
			this.paginationValues.end -= this.paginationValues.limit;
		}
		this.pagination.emit(this.paginationValues);
	}

	gotoNext(){
		this.paginationValues.start += this.paginationValues.limit;
		if(this.paginationValues.totalRecords < this.paginationValues.end){
			this.paginationValues.end = this.paginationValues.totalRecords;
		}else{
			this.paginationValues.end += this.paginationValues.limit;
		}
		this.pagination.emit(this.paginationValues);
	}


}
