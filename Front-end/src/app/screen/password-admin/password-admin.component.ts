import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-admin',
  templateUrl: './password-admin.component.html',
  styleUrls: ['./password-admin.component.css']
})
export class PasswordAdminComponent implements OnInit {

  formulario:FormGroup;
  constructor(public FormB:FormBuilder, router: Router) {
    this.formulario = this.FormB.group({
      oldpassword: ["",[Validators.required,Validators.maxLength(8)]],
      newpassword: ["",[Validators.required,Validators.maxLength(8)]]
    })
   }
  ngOnInit(): void {
  }
  changePassword(){
    
  }

}
