import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-paciente',
  templateUrl: './dashboard-paciente.component.html',
  styleUrls: ['./dashboard-paciente.component.sass']
})
export class DashboardPacienteComponent implements OnInit {


  constructor(public dataDemo: DatoDemoService,private router: Router ) {
    
  }

  ngOnInit(): void {
  }

  cambiarContrasena(){
    this.router.navigate(['/cambioPasswordUser']);
  }

}