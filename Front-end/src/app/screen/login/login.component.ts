import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  formulario:FormGroup;
  paciente ={};
  constructor(public FormB:FormBuilder,private authService: AuthService,private router: Router) {
    this.formulario = this.FormB.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.maxLength(8)]]
    })
   }

  ngOnInit(): void {
  }

  login() {
    this.paciente = this.formulario.value;
    this.authService.login(this.paciente)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('emailU',this.formulario.get('email')?.value);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      )
  }


}
