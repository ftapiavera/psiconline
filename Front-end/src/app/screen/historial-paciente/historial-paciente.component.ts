import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';

@Component({
  selector: 'app-historial-paciente',
  templateUrl: './historial-paciente.component.html',
  styleUrls: ['./historial-paciente.component.sass']
})
export class HistorialPacienteComponent implements OnInit {


  constructor(public dataDemo: DatoDemoService) {
    
  }

  ngOnInit(): void {
  }

}