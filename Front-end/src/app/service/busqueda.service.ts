import { Injectable,Output,EventEmitter } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Ciudad } from 'src/app/models/ciudades.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  
  private urlServer = 'http://localhost:3000';
  private tratamientos: Tratamiento[]=[
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

  private ciudades: Ciudad[]= [
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
  ]

  getTratamientos(): Tratamiento[]{
    return this.tratamientos;
  }
  getCiudades(): Ciudad[]{
    return this.ciudades;
  }
  constructor(private http: HttpClient, private router: Router) { }

  searchPsicologo(){
      return this.http.get<any>(this.urlServer +'/psicologos');
  }

  deletePsicologo(user:any) {
    console.log(user);
    
    this.http.delete(this.urlServer + '/psicologos/'+user).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );

  }

}
