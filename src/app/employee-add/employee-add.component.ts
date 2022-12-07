import { Component } from '@angular/core';
import { EmployeeApiService } from '../employee-api.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  pswrd=""
  salary=""
  username=""
  mobile_no=""
  
  comp_name=""
  desi=""
  emp_name=""
  emp_code=""
  constructor(private api:EmployeeApiService){}

  read=()=>{
    let data:any={
      "emp_code":this.emp_code,
      "emp_name":this.comp_name,
      "username":this.username,
      "comp_name":this.comp_name,
      "salary":this.salary,
      "desi":this.desi,
      "pswrd":this.pswrd,
      "mobile_no":this.mobile_no
    }
    this.api.adddata(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    console.log(data)
  }


}
