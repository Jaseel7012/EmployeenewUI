import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private http :HttpClient) { }
  datafetch=()=>{
    return this.http.get("http://localhost:8080/viewemp")

  }
  adddata=(data:any)=>{
    return this.http.post("http://localhost:8080/addemp",data)
  }
}
