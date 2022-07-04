import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-password-admin',
  templateUrl: './password-admin.component.html',
  styleUrls: ['./password-admin.component.sass']
})
export class PasswordAdminComponent implements OnInit {

  formulario:FormGroup;
  passwords=[];
  public mensaje:any = {};

  constructor(public FormB:FormBuilder,private authService: AuthService,private router: Router) {
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
    this.mensaje.usuario = localStorage.getItem('usuario');    
    this.authService.changePasswordAdmin(this.mensaje);

  }

  volver(){
    this.router.navigate(['/adminDash']);
  }

}
