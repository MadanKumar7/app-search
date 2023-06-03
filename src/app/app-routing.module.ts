import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'auth', component:AuthComponent},
  {path:'employee-details', component:EmpTableComponent},
  // {path:'search', component:FormComponent},
  {path:'', redirectTo:'/auth', pathMatch:'full'},
  {path:'**', redirectTo:'/auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
