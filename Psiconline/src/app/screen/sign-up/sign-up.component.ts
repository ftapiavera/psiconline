import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit {
  formulario:FormGroup;
  activeId:number=5;
  constructor(public FormB:FormBuilder){
    this.formulario = this.FormB.group({
      nombre: ["",Validators.required],
      apellido: ["",Validators.required],
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.maxLength(8)]],
      passwordRepeat: ["",[Validators.required, Validators.maxLength(8)]]
    })
  }
  ngOnInit(): void {
  }

  validacion(){
    console.log(this.formulario.value);
    if (this.formulario.get("password")?.value!=this.formulario.get("passwordRepeat")?.value) {
      alert("Las contraseñas no son iguales");
    }
  }


}