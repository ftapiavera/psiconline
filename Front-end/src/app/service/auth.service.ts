import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlServer = 'http://localhost:3000/';
  constructor(private http: HttpClient, private router: Router) {

   }

   signUpUser(user:any) {
    return this.http.post<any>(this.urlServer + 'signup', user);
  }

  login(user:any) {
    return this.http.post<any>(this.urlServer + '/login', user);
  }

}
