import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlServer = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {

   }

   signUpUser(user:any) {
    return this.http.post<any>(this.urlServer + '/signup', user);
  }

  signUpPsico(user:any) {
    return this.http.post<any>(this.urlServer + '/signpsicologo', user);
  }

  login(user:any) {
    return this.http.post<any>(this.urlServer + '/login', user);
  }

  loginPsico(user:any) {
    return this.http.post<any>(this.urlServer + '/loginpsicologo', user);
  }

  loginAdmin(user:any) {
    return this.http.post<any>(this.urlServer + '/admin', user);
  }

  changePassword(passwords:any) {
    console.log(passwords);
    return this.http.put(this.urlServer +'/admin/changePassword', passwords);
  }

}
