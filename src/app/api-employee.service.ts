import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {

  constructor(private htp:HttpClient) { }
  fetchdata=()=>{
    this.htp.get("http://localhost:8080/viewemp")
  }
}
