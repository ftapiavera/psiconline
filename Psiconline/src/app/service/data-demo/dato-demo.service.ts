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
}
