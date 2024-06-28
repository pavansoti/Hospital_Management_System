
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../classes/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _http:HttpClient) { }

  //addAdmin
  insert(doctor):Observable<any>{
    return this._http.post("http://localhost:8080/doctor/insert",doctor)
  }

  //viewDoctor
  views():Observable<any>{
    return this._http.get("http://localhost:8080/doctor/views")
  }

  //checkAppointment
  view(id):Observable<any>{
    return this._http.get("http://localhost:8080/doctor/view/"+id)
  }

  //deleteDoctor
  delete(id):Observable<any>{
    return this._http.delete("http://localhost:8080/doctor/delete/"+id)
  }
  
  //updateDoctor
  update(id,doctor):Observable<any>{
    return this._http.patch("http://localhost:8080/doctor/update/"+id,doctor)
  }

  //userHome
  getSpecializations():Observable<any>{
    return this._http.get("http://localhost:8080/doctor/specialization")
  }

  //bookAppointment
  viewsSpecializaions(specialization){
    return this._http.get("http://localhost:8080/doctor/specialization/"+specialization)
  }
}
