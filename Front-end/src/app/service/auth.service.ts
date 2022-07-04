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

  changePasswordAdmin(passwords:any) {
    this.http.put<any>(this.urlServer +'/admin/changePassword', passwords).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }
  

  changePasswordPsico(passwords:any) {
    this.http.put<any>(this.urlServer +'/psicologo/changePassword', passwords).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

  changePasswordUser(passwords:any) {
    this.http.put<any>(this.urlServer +'/paciente/changePassword', passwords).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
     );
  }

}
