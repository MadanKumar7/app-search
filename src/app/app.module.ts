import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SearchFieldsData } from './utils/search-fields-data';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmpTableCols } from './utils/emp-table-cols';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
  		EmpTableComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgxDatatableModule
	],
	providers: [SearchFieldsData, EmpTableCols,],
	bootstrap: [AppComponent]
})
export class AppModule { }
