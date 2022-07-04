import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-psicologo',
  templateUrl: './login-psicologo.component.html',
  styleUrls: ['./login-psicologo.component.sass']
})
export class LoginPsicologoComponent implements OnInit {
  formulario:FormGroup;
  psicologo ={};
  constructor(public FormA:FormBuilder,private authService: AuthService,private router: Router) {
    this.formulario = this.FormA.group({
      email:  ["",[Validators.required,Validators.email]],
      password: [""]
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.psicologo = this.formulario.value;
    this.authService.loginPsico(this.psicologo)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('emailP',this.formulario.get('email')?.value);
          this.router.navigate(['/dashMedico']);
        },
        err => console.log(err)
      )
  }

}
