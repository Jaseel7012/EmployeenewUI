import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const myroute:Routes=[
  {
    path:""
    ,component:EmployeeAddComponent
  },
  {
    path:"view",
    component:EmployeeViewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
