import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { NgxSpinnerModule } from 'ngx-spinner';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

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
import { DatePipe } from '@angular/common';
import { CommonService } from './Services/common.service';
import { CategoryList } from './utils/category.list';
import { AuthComponent } from './auth/auth.component';

@NgModule({
	declarations: [
		AppComponent,
		FormComponent,
  		EmpTableComponent,
    	PaginationComponent,
     	NavBarComponent,
      AuthComponent,
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
		MatButtonModule,
		MatCardModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonToggleModule,
		MatIconModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		SearchFieldsData, 
		EmpTableCols, 
		Sort, 
		DatePipe, 
		CommonService, 
		CategoryList
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
