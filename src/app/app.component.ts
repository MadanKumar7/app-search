import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './Services/auth.service';
import { CommonService } from './Services/common.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	title = 'app-search';
	isLoader = false;
	isLoggedIn = false;

	constructor(
		private spinner: NgxSpinnerService,
		private commonService:CommonService,
		private authService:AuthService
	){}

	ngOnInit(){
		this.authService.getIsLoggedIn().subscribe(
			(res:any) => {
				this.isLoggedIn = res;
			}
		);
		this.commonService.getLoader().subscribe(
			(res:any) => {
				if(res){
					this.spinner.show();
				}else{
					this.spinner.hide();
				}
			}
		)
	}
}
