import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';

@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.sass']
})
export class CitaOnlineComponent implements OnInit {
  public tratamientos: Tratamiento[] = [];
  constructor() {

    this.tratamientos = [
      {nombre : "ansiedad", id:1},
      {nombre : "depresion",id:2},
      {nombre : "psicologia intantil",id:4},
      {nombre : "autoestima",id:5},
      {nombre : "terapia de pareja",id:6},
      {nombre : "terapia familiar",id:7},
      {nombre : "terapia cognitivo conductual",id:8},
      {nombre : "bulimia",id:9},
      {nombre : "anorexia",id:10},
      {nombre : "drogadiccion",id:11}
    ]

   }

  ngOnInit(): void {

  }

}