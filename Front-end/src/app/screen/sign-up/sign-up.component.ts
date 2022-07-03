import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})

export class SignUpComponent implements OnInit {
  formulario:FormGroup;
  activeId:number=5;
  paciente ={};

  constructor(public FormB:FormBuilder,private authService: AuthService,private router: Router){
    
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
    else{
      this.signUp();
    }
  }

  signUp(){
    var nombre = this.formulario.get("nombre")?.value+" "+this.formulario.get("apellido")?.value;
    this.paciente = {"nombre":nombre , "email": this.formulario.get("email")?.value,"password":this.formulario.get("password")?.value};
    this.authService.signUpUser(this.paciente)
    .subscribe(res => {
        localStorage.setItem('token', res.token);
        alert("El usuario se ha registrado exitosamente");
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    )

  }


}