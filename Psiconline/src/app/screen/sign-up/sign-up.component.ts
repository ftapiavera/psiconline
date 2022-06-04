import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, EmailValidator, Validators, FormBuilder } from '@angular/forms';
import jquery=require('jquery');
const $:JQueryStatic=jquery;

(function () {

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
  formulario:FormGroup;

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
  }

}