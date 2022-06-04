import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.sass']
})
export class ResultadoBusquedaComponent implements OnInit {

  public psicologos: Psicologo[] = [];

  constructor() {
    this.psicologos = [
      {nombre : "Lidia Fernandez",universidad: "Universidad de Valparaiso", tratamiento: "ansiedad",ciudad: "Valparaiso",tipoConsulta: "presencial",direccion: "Cerro Concepcion 1850, oficina 3",telefono: "+56987656755",rut: "15287340-4",mail: "fernandez.lidia@gmail.com",calificacion: 4.7},
      {nombre : "Francisco Carvajal",universidad: "Universidad Andres Bello", tratamiento: "ansiedad",ciudad: "Viña del Mar",tipoConsulta: "presencial",direccion: "Arlegui #3028, Edificio Vista Mar, oficina 23",telefono: "+56987708230",rut: "10999000-3",mail: "franciscocarvajalpsicologo@gmail.com",calificacion: 4.9}
    ]
  }

  ngOnInit(): void {
  }

}