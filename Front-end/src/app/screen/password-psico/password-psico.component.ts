import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-password-psico',
  templateUrl: './password-psico.component.html',
  styleUrls: ['./password-psico.component.sass']
})
export class PasswordPsicoComponent implements OnInit {

  formulario:FormGroup;
  passwords={};
  public mensaje:any = {};
  constructor(public FormB:FormBuilder,private authService: AuthService, private router: Router) {
    this.formulario = this.FormB.group({
      oldpassword: ["",[Validators.required,Validators.maxLength(8)]],
      newpassword: ["",[Validators.required,Validators.maxLength(8)]]
    })
   }
  ngOnInit(): void {
  }
  changePassword(){
    this.mensaje.oldpassword = this.formulario.get('oldpassword')?.value;
    this.mensaje.newpassword = this.formulario.get('newpassword')?.value;
    this.mensaje.email = localStorage.getItem('emailP');    
    this.authService.changePasswordAdmin(this.mensaje);

  }
  volver(){
    this.router.navigate(['/dashMedico']);
  }
}
