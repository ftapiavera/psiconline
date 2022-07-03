import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.sass']
})
export class LoginAdminComponent implements OnInit {
  formulario:FormGroup;
  administrador={};
  constructor(public FormB:FormBuilder,private authService: AuthService,private router: Router) {
    this.formulario = this.FormB.group({
      usuario: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.maxLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  autorizacion(){
    this.administrador = this.formulario.value;
    this.authService.loginAdmin(this.administrador)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/adminDash']);
        },
        err => console.log(err)
      )
  }
}
