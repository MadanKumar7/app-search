import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { NgxSpinnerModule } from 'ngx-spinner';

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
import { DatePipe } from '@angular/common';
import { DataFilterService } from './Services/data-filter.service';
import { CategoriesService } from './Services/categories.service';
import { CategoryList } from './utils/category.list';
// import { NgxChartsModule }from '@swimlane/ngx-charts';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
  		EmpTableComponent,
    	PaginationComponent,
     	NavBarComponent,
     	HomeComponent
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
		// NgxChartsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		SearchFieldsData, 
		EmpTableCols, 
		Sort, 
		DatePipe, 
		DataFilterService, 
		CategoriesService, 
		CategoryList
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
