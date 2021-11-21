import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'employee-details', component:EmpTableComponent},
  {path:'search', component:FormComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
