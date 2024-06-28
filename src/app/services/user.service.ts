import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  //register
  insert(user:User):Observable<User>{
    return this._http.post("http://localhost:8080/user/insert",user)
  }

  views():Observable<any>{
    return this._http.get("http://localhost:8080/user/views")
  }

  //login
  confirmUser(user:User):Observable<User>{
    return this._http.post("http://localhost:8080/user/login",user)
  }

  //changepassword
  changePassword(user,newPassword):Observable<any>{
    return this._http.put("http://localhost:8080/user/change/"+newPassword,user)
  }

  //forgetPassword
  forgetPassword(id):Observable<any>{
    return this._http.get("http://localhost:8080/user/forget_password/"+id)
  }

  //forgetPassword
  resetPassword(user):Observable<any>{
    return this._http.post("http://localhost:8080/user/reset_password",user)
  }

  //feedback
  view(username):Observable<any>{
    return this._http.get("http://localhost:8080/user/feedback/"+username)
  }

}
