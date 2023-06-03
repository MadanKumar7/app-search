import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from '../auth/user.model';


interface AuthResponseData {
	idToken: string,
	email: string,
	refreshToken: string,
	expiresIn: string,
	localId: string,
	registered?: boolean
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	isLoggedIn = new BehaviorSubject<boolean>(false);
	user = new BehaviorSubject<User | null>(null);

	constructor(private http: HttpClient) { }

	setIsLoggedIn(isLoggedIn:boolean){
		this.isLoggedIn.next(isLoggedIn);
	}

	getIsLoggedIn(){
		return this.isLoggedIn;
	}

	signUp(email: string, password: string) {
		return this.http.post<AuthResponseData>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJP7SQe0hxSNZuH53g3CYl96wZxGgqF10',
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		).pipe(catchError(this.handleError), tap(res => {
			this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)
		}));
	}

	login(email: string, password: string) {
		return this.http.post <AuthResponseData>(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJP7SQe0hxSNZuH53g3CYl96wZxGgqF10',
			{
				email: email,
				password: password,
				returnSecureToken: true
			}
		).pipe(catchError(this.handleError), tap(res => {
			this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)
		}));
	}

	private handleAuthentication(email:string, userId:string, token:string, expiresIn:number){
		const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
			const user = new User(email, userId, token, expirationDate);
			this.user.next(user);
	}

	private handleError(errorRes: HttpErrorResponse){
		let errorMessage = 'An unknown error occured!';
		switch (errorRes?.error?.error?.message) {
			case 'EMAIL_EXISTS':
				errorMessage = 'This email exists already!';
				break;
			case 'INVALID_PASSWORD':
				errorMessage = 'Invalid Password!';
				break;
			case 'EMAIL_NOT_FOUND':
				errorMessage = 'Invalid Email!';
				break;
			default:
				errorMessage = 'Something went wrong!'
		}
		return throwError(errorMessage);
	}
}
