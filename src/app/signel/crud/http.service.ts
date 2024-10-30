import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './Interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7217";

  getAllEmployee() {
    return this.http.get<IEmployee[]>(this.baseUrl+"/api/Employee");
  }

  postEmployee(employeeData: IEmployee) {
    return this.http.post(this.baseUrl+"/api/Employee", employeeData);
  }
}
