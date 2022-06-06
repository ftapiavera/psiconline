import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';

@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.sass']
})
export class CitaOnlineComponent implements OnInit {
 constructor(public demoData: DatoDemoService) {

   }

  ngOnInit(): void {

  }

}