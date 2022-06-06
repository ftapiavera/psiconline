import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Ciudad } from 'src/app/models/ciudades.model';
import { Psicologo } from 'src/app/models/psicologo.model';


@Injectable({
  providedIn: 'root'
})
export class DatoDemoService {

  constructor(private http:HttpClient) { }

  get_profesionales(): Psicologo[]{
    var datos = [
      {
          nombre : "Lidia Fernandez",
          universidad : "Universidad de Valparaiso",
          tratamiento : ["ansiedad","depresion","psicologia infantil"],
          ciudad : "Valparaiso",
          tipoConsulta : ["presencial","online"],
          direccion : "Cerro Concepcion 1850, oficina 3",
          telefono: "+56987656755",
          rut : "15287340-4",
          mail : "fernandez.lidia@gmail.com",
          calificacion : 4.7
      
      },
      {
          nombre : "Francisco Carvajal",
          universidad: "Universidad Andres Bello", 
          tratamiento: ["ansiedad"],
          ciudad: "Viña del Mar",
          tipoConsulta: ["presencial"],
          direccion: "Arlegui #3028, Edificio Vista Mar, oficina 23",
          telefono: "+56987708230",
          rut: "10999000-3",
          mail: "franciscocarvajalpsicologo@gmail.com",
          calificacion: 4.9
      }
  ];
    return datos;
  }
  get_tratamientos(): Tratamiento[]{
    var datos = [
      {nombre : "Ansiedad", id:1},
      {nombre : "depresion",id:2},
      {nombre : "psicologia intantil",id:4},
      {nombre : "autoestima",id:5},
      {nombre : "terapia de pareja",id:6},
      {nombre : "terapia familiar",id:7},
      {nombre : "terapia cognitivo conductual",id:8},
      {nombre : "bulimia",id:9},
      {nombre : "anorexia",id:10},
      {nombre : "drogadiccion",id:11}
    ];
    return datos;
  }
  get_ciudades(): Ciudad[]{
    var datos = [
      {nombre: "Viña del Mar", id:1},
      {nombre: "Valparaiso", id:2},
      {nombre: "Con Con", id:3},
      {nombre: "Quilpue", id:4},
      {nombre: "Villa Alemana", id:5},
      {nombre: "Reñaca", id:6},
      {nombre: "Santiago", id:7},
      {nombre: "Providencia", id:8},
      {nombre: "Vitacura", id:9},
      {nombre: "Maipu", id:10},
      {nombre: "Independencia", id:11},
      {nombre: "Las Condes", id:12},
      {nombre: "Quilicura", id:13}
    ];
    return datos;
  }
}
