import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-password-admin',
  templateUrl: './password-admin.component.html',
  styleUrls: ['./password-admin.component.css']
})
export class PasswordAdminComponent implements OnInit {

  formulario:FormGroup;
  passwords={};
  constructor(public FormB:FormBuilder,private authService: AuthService, router: Router) {
    this.formulario = this.FormB.group({
      oldpassword: ["",[Validators.required,Validators.maxLength(8)]],
      newpassword: ["",[Validators.required,Validators.maxLength(8)]]
    })
   }
  ngOnInit(): void {
  }
  changePassword(){
    this.passwords = this.formulario.value;
    this.authService.changePassword(this.passwords);
  }

}
