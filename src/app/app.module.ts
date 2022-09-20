import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { SearchFieldsData } from './utils/search-fields-data';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmpTableCols } from './utils/emp-table-cols';
import { PaginationComponent } from './shared-components/pagination/pagination.component';
import { Sort } from './utils/sorting';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './shared-components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { AlertComponent } from './shared-components/alert/alert.component';
import { FormModalComponent } from './shared-components/form-modal/form-modal.component';



@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
  		EmpTableComponent,
    	PaginationComponent,
     	NavBarComponent,
     	HomeComponent,
      	AlertComponent,
       	FormModalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		NgxDatatableModule,
		AngularFireModule.initializeApp(environment.firebaseConfig),
   		AngularFireDatabaseModule,
		NgxSpinnerModule,
		BsDatepickerModule.forRoot()
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [SearchFieldsData, EmpTableCols, Sort, DatePipe, CurrencyPipe],
	bootstrap: [AppComponent]
})
export class AppModule { }
