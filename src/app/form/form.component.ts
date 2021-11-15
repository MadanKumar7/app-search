import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { SearchFieldsData } from '../utils/search-fields-data';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	searchForm: FormGroup;
	searchData:any = {};

	constructor(
		private fb: FormBuilder,
		private searchFieldData: SearchFieldsData
	) {
		this.searchForm = this.fb.group({
			searchFields: this.fb.array([])
		})
	}

	ngOnInit(): void {
		this.initiateSearchForm();
		this.searchData = this.searchFieldData.getSearchOptions();
	}

	initiateSearchForm(){
		this.getSearchFieldsArr().push(
			this.getFormDataGroup()
		);
	}

	getSearchFieldsArr(): FormArray{
		return this.searchForm.get("searchFields") as FormArray;
	}

	getFormDataGroup(): FormGroup{
		return this.fb.group({
			"attribute": this.fb.control("null"),
			"operator": this.fb.control("AND")
		});
	}

	getAttributeValueInput(idx:any){
		let frmGrp = this.getFormDataGroupByIdx(idx),
		fieldOption = this.getAttributeConfig(idx), 
		inputDefaultValue = ''

		if(fieldOption && fieldOption.inputType && fieldOption.inputType === 'select'){
			inputDefaultValue = 'null';
		}
		if(frmGrp.contains('attributeValue')){
			frmGrp.removeControl('attributeValue');
			// setTimeout(()=>{
			// 	frmGrp.addControl(
			// 		"attributeValue", this.getAttributeValueInputControlByType(fieldOption, inputDefaultValue)
			// 	)
			// }, 0);
			frmGrp.addControl(
				"attributeValue", this.getAttributeValueInputControlByType(fieldOption, inputDefaultValue)
			)
		}else{
			frmGrp.addControl(
				"attributeValue", this.getAttributeValueInputControlByType(fieldOption, inputDefaultValue)
			);
		}
	}

	getFormDataGroupByIdx(idx:any){
		return this.getSearchFieldsArr().at(idx) as FormGroup;
	}

	getAttributeConfig(idx:any){
		let frmGrp = this.getFormDataGroupByIdx(idx), 
		fieldId = this.getFieldId(frmGrp);

		return fieldId ? this.searchData.searchByoptions[fieldId] : null;
	}

	getFieldId(frmGrp: FormGroup){
		return frmGrp.get('attribute')?.value ? frmGrp.get('attribute')?.value : null;
	}

	getAttributeValueInputControlByType(fieldOption: any, inputDefaultValue: any): any {
		if(fieldOption && fieldOption.hasOwnProperty('inputType') && fieldOption.inputType === 'date'){
			let start = '', end = '';

			if(inputDefaultValue[0]){
				start = inputDefaultValue[0];
				end = inputDefaultValue[1];
			}
			return this.fb.array([
				this.fb.control(start),
				this.fb.control({value: end, disabled: true})
			])
		}else{
			return this.fb.control(inputDefaultValue);
		}
	}

	enableDate(idx:any){
		let frmGrp = this.getFormDataGroupByIdx(idx),
		frmArr = frmGrp?.controls?.attributeValue as FormArray,
		startDate = frmArr.controls[0],
		endDate = frmArr.controls[1]
		if(startDate.value){
			endDate.enable();
			if(startDate.value > endDate.value){
				endDate.setValue('');
			}
		}else{
			endDate.disable();
			endDate.setValue('');
		}
	}

	getOperationClass(idx:any, operatorVal:string){
		let frmGrp = this.getFormDataGroupByIdx(idx),
		operator,
		cls = 'btn-secondary';

		operator = frmGrp.get('operator')?.value;
		if(operator === operatorVal){
			cls = 'btn-primary'
		}
		return cls

	}

	updateOperation(e:Event, idx:any, operator:string){
		let target = e.target as HTMLInputElement,
		frmGrp = this.getFormDataGroupByIdx(idx),
		operatorEles: NodeList;

		frmGrp.get('operator')?.setValue(operator);
		operatorEles = target.parentElement?.querySelectorAll("input[type=button]") as NodeList;
		for(let i=0; i<operatorEles?.length; i++){
			(operatorEles[i] as Element).classList.remove('btn-secondary');
			(operatorEles[i] as Element).classList.remove('btn-primary');
			if(operatorEles[i] !== target){
				(operatorEles[i] as Element).classList.add('btn-secondary')
			}
		}
		target.classList.add('btn-primary')
	}

	removeControlFromForm(idx:any){
		this.getSearchFieldsArr().removeAt(idx);
	}

	getIsFirstRowValueSet(){
		let frmGrp = this.getSearchFieldsArr().at(0) as FormGroup,
		formGrpArrlen = this.getSearchFieldsArr().length,
		res = false;

		if(formGrpArrlen === 1){
			res = (
					frmGrp.contains('attribute') &&
					frmGrp.get('attributeValue')?.value &&
					frmGrp.get('attributeValue')?.value != 'null'
			) ? true: false;
		}else if(formGrpArrlen > 1){
			res = true;
		}
		return res;

	}

	getIsLastRow(idx:any){
		return (this.getSearchFieldsArr().controls.length == (idx+1));
	}

	addMoreAttributeToForm(){
		this.getSearchFieldsArr().push(
			this.getFormDataGroup()
		);
	}

	enableAddIcon(idx:any){
		let frmGrp = this.getFormDataGroupByIdx(idx),
		fieldOption = this.getAttributeConfig(idx),
		attrValFrmArr = frmGrp?.get('attributeValue')


		if(fieldOption && fieldOption.hasOwnProperty('inputType') && fieldOption.inputType === 'date'){
			
			let frmArr = frmGrp?.controls?.attributeValue as FormArray,
			startDate = frmArr?.controls[0],
			endDate = frmArr?.controls[1]
			if(startDate?.value && endDate?.value && isNaN(startDate?.value) && isNaN(endDate?.value)){
				return true;
			}
			return false;
		}else if(attrValFrmArr && attrValFrmArr.value && attrValFrmArr.value != 'null'){
			return true
		}else{
			return false;
		}
		
	}


}
