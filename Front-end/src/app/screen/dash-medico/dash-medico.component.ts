import { Component, OnInit } from '@angular/core';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-medico',
  templateUrl: './dash-medico.component.html',
  styleUrls: ['./dash-medico.component.sass']
})
export class DashMedicoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarContrasena(){
    this.router.navigate(['/cambioPasswordPsico']);
  }
}
