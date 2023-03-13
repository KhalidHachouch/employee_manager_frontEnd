import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private apiurl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiurl}/all`);
  }

  public addEmployee(employee:Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.apiurl}/save`,employee);
  }

  public updateEmployee(employee:Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.apiurl}/update`,employee);
  }

  public deleteEmployee(employeeId:number): Observable<void>{
    return this.http.delete<void>(`${this.apiurl}/delete/${employeeId}`);
  }

}
