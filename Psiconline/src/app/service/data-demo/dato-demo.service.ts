import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatoDemoService {

  constructor(private http:HttpClient) { }

  get_profesionales(): Observable<any>{
    var datos = this.http.get("assets/json/psicologos.json");
    return datos;
  }
  get_tratamientos(): Observable<any>{
    var datos = this.http.get("assets/json/tratamientos.json");
    return datos;
  }
  get_ciudades(): Observable<any>{
    var datos = this.http.get("assets/json/ciudades.json");
    return datos;
  }
}
