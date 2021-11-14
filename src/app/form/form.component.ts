import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

	searchForm: FormGroup;

	constructor(
		private fb: FormBuilder
	) {
		this.searchForm = this.fb.group({
			searchFields: this.fb.array([])
		})
	}

	ngOnInit(): void {
	}

	getSearchFileds(): FormArray{
		return this.searchForm.get("searchFields") as FormArray;
	}

}
