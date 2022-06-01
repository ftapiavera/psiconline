import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators } from '@angular/forms';
import jquery=require('jquery');
const $:JQueryStatic=jquery;

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event: any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

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