import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, ViewChild, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';


@Component({
	selector: 'app-form-modal',
	templateUrl: './form-modal.component.html',
	styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit, OnChanges, AfterViewInit {

	@ViewChild('formModal', {static: false}) modal!:ElementRef;
	@ViewChild(BsDatepickerDirective, { static: false }) datepicker?: BsDatepickerDirective;

	@Input() title: string = '';
	@Input() primaryButton: string = '';
	@Input() secondaryButton: string = '';
	@Input() detailsObj: any;
	@Input() formFields: any;

	formGroup!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private currencyPipe: CurrencyPipe,
		private renderer: Renderer2
	) { }

	ngOnInit(): void {
		this.formGroup = this.fb.group({});
	}

	ngAfterViewInit(){
		this.renderer.listen(this.modal.nativeElement, 'scroll', (event)=> this.datepicker?.hide());
	}

	ngOnChanges() {
		console.log(this.detailsObj);
		console.log(this.formFields);
		if(this.formFields?.length > 0){
			this.formFields.forEach((field: any) => {
				if (field.type === 'radioButton') {
					this.formGroup.addControl(field.name, this.fb.control(field.options[0].value, [Validators.required, this.checkPatternValidation(field.pattern)]));
				}else if (field.required) {
					this.formGroup.addControl(field.name, this.fb.control('', [Validators.required, this.checkPatternValidation(field.pattern)]));
				}else{
					this.formGroup.addControl(field.name, this.fb.control('', [this.checkPatternValidation(field.pattern)]));
				}

			});
			this.formGroup.patchValue(this.detailsObj);
		}

	}

	checkPatternValidation(pattern:string):ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			let value = control.value;
			if(pattern){
				let regexPattern = new RegExp(pattern);
				if(regexPattern.test(value)){
					return null;
				}else{
					return {
						patternError: pattern
					}
				}
			}else{
				return null;
			}

		}
	}

	handlePrimaryAction(){
		console.log(this.formGroup);
	}

	transformTocurrency(event:any){
		let inputvalue = event.target.value;
		if(this.numberOnlyCheck(inputvalue)){
			let formattedValue = this.currencyPipe.transform(inputvalue, '$');
			event.target.value = formattedValue;
		}

	}

	removeCurrencyFormat(event:any){
		let inputvalue = event.target.value;
		if(inputvalue){
			event.target.value = inputvalue.replaceAll('$','').replaceAll(',','');
		}
	}

	numberOnlyCheck(value:any){
		return !isNaN(value);
	}

}
