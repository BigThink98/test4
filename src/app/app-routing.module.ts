import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from  './login/login.component';
import {ContactusComponent} from './contactus/contactus.component';

const routes: Routes = [ 
{ path: 'contactus', component: ContactusComponent },
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
