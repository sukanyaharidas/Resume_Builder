import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public http:HttpClient) { }

  userSignup(users:any){
    console.log(users);
    return this.http.post('http://localhost:3000/signup', {users})
    .subscribe((data)=>console.log(data));
    }


  login(authData:any){
    console.log(authData);
    return this.http.post('http://localhost:3000/login',{authData});
  
    }

}
