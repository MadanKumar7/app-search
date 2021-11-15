import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SearchFieldsData } from './utils/search-fields-data';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [SearchFieldsData],
	bootstrap: [AppComponent]
})
export class AppModule { }
