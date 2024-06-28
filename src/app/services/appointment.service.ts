import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(private _http:HttpClient) { }

  //addPatient
  insert(patient):Observable<any>{
    return this._http.post("http://localhost:8080/appointment/insert",patient)
  }

  //viewAppointment
  viewAll():Observable<any>{
    return this._http.get("http://localhost:8080/appointment/views")
  }

  //allAppointment
  views(username):Observable<any>{
    return this._http.get("http://localhost:8080/appointment/views/"+username)
  }

  //checkAppointment
  viewId(id):Observable<any>{
    return this._http.get("http://localhost:8080/appointment/view/"+id)
  }

  //checkAppointment
  //allAppointment
  updateStatus(id,status):Observable<any>{
    return this._http.get(`http://localhost:8080/appointment/update_status/${id}/${status}`)
  }

  //viewAppointmnet
  viewsAppointmentDate(date):Observable<any>{
    return this._http.get(`http://localhost:8080/appointment/views_date/${date}`)
  }
}
