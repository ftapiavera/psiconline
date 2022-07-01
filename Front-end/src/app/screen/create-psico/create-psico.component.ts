import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';

@Component({
  selector: 'app-create-psico',
  templateUrl: './create-psico.component.html',
  styleUrls: ['./create-psico.component.sass']
})
export class CreatePsicologoComponent implements OnInit {


  constructor(public dataDemo: DatoDemoService) {
    
  }

  ngOnInit(): void {
  }

}