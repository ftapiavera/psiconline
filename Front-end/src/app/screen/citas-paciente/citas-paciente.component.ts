import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';

@Component({
  selector: 'app-citas-paciente',
  templateUrl: './citas-paciente.component.html',
  styleUrls: ['./citas-paciente.component.sass']
})
export class CitasPacienteComponent implements OnInit {


  constructor(public dataDemo: DatoDemoService) {
    
  }

  ngOnInit(): void {
  }

}