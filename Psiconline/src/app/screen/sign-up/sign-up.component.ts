import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit {
  user!:string;

  ngOnInit(): void {
      name: new FormControl('');
      lastname: new FormControl('');
      email: new FormControl('');
      password: new FormControl('');
      passwordrepeat: new FormControl('');

  }
  formSignUp = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern("@")]),
    password: new FormControl(''),
    passwordrepeat: new FormControl(''),
  })

  submit(){
    this.user='nombre=${this.formSignUp.value.nombre}lastname=${this.formSignUp.value.lastname}email=${this.formSignUp.value.email}password=${this.formSignUp.value.password}passwrdrepeat=${this.formSignUp.value.passwordrepeat}'
  }

}