import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';
import { EmployeeApiService } from '../employee-api.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
constructor(private api:EmployeeApiService){
this.api.datafetch().subscribe(
  (response:any)=>{
    this.data=response
    console.log(response)
  }
  
)
}
data:any=[]
}
