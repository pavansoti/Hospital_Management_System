import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private _http:HttpClient) { }


  //login
  confirmAdmin(admin):Observable<any>{
    return this._http.post("http://localhost:8080/admin/login",admin)
  }
  
  //addAdmin
  insert(admin):Observable<any>{
    return this._http.post("http://localhost:8080/admin/insert",admin)
  }

  //adminPasswordChange
  changePassword(admin,newPassword):Observable<any>{
    return this._http.put("http://localhost:8080/admin/change/"+newPassword,admin)
  }

  //deleteAdmin
  delete(id):Observable<any>{//username or password
    return this._http.delete("http://localhost:8080/admin/delete/"+id)
  }
}
