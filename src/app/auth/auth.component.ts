import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { CommonService } from '../Services/common.service';

interface signupPayload{
	email:string,
	password:string,
	confirmPassword?:string
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	loginForm!:FormGroup;
	signupForm!:FormGroup;
	isLogin = true;
	showMessage = false;
	message = {
		message:'',
		type:''
	};

	constructor(
		private fb: FormBuilder,
		private authService:AuthService,
		private commonService:CommonService
	) { }

	ngOnInit(): void {
		this.initiateForms();
	}

	initiateForms(){
		this.loginForm = this.fb.group({
			email: this.fb.control('', [Validators.required, Validators.email]),
			password: this.fb.control('', [Validators.required])
		});

		this.signupForm = this.fb.group({
			// firstName: this.fb.control('', [Validators.required]),
			// lastName: this.fb.control('', [Validators.required]),
			email: this.fb.control('', [Validators.required, Validators.email]),
			password: this.fb.control('', [Validators.required]),
			confirmPassword: this.fb.control('', [Validators.required])
		});
	}

	handleLogin(){
		this.commonService.setLoader(true);
		const {email,password}: signupPayload = this.loginForm.value;
		this.authService.login(email,password).subscribe(
			(res:any)=>{
				this.commonService.setLoader(false);
				this.showMessage = false;
				this.authService.setIsLoggedIn(true);
			},
			(err:string)=>{
				this.handleError(err);
			}
		)
	}

	handleSignup(){
		this.commonService.setLoader(true);
		const {email,password,confirmPassword}: signupPayload = this.signupForm.value;
		if(this.signupForm.valid && password === confirmPassword){
			this.authService.signUp(email, password).subscribe(
				(res:any) =>{
					this.commonService.setLoader(false);
					this.frameMessage('Signedup Successfully', 'success');
					this.signupForm.reset();
					this.showMessage = true;
				},
				(err:string)=>{
					this.handleError(err);
				}
			);
		}else{
			alert('Enter correct data')
		}
	}

	frameMessage(message:string, type:string){
		this.message = {
			message: message,
			type: type
		}
	}

	handleError(err:string){
		this.commonService.setLoader(false);
		this.frameMessage(err, 'error');
		this.showMessage = true;
	}

}
