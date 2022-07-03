import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Ciudad } from 'src/app/models/ciudades.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';
import { BusquedaService } from 'src/app/service/busqueda.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.sass'],
  providers: [BusquedaService]
})
export class ResultadoBusquedaComponent implements OnInit {
  psicologos = [];
  psicologosSeleccionados:Array<any> = [];
  public psicologoSeleccionado:any;

  constructor(private busquedaSvc: BusquedaService,public dataDemo: DatoDemoService,private BusquedaService: BusquedaService,private router: Router) {
    
  }

 public ngOnInit(): void {
    
    this.BusquedaService.searchPsicologo()
    .subscribe(
      res => {
        this.psicologos=JSON.parse(JSON.stringify(res.psicologosAll));
        for(let psicologo of this.psicologos){
          if(localStorage.getItem('tipoConsulta')==='presencial'){
            if(JSON.parse(JSON.stringify(psicologo)).ciudad===localStorage.getItem('ciudad')){
              for(let tratamiento of JSON.parse(JSON.stringify(psicologo)).tratamientos){
                if(tratamiento === localStorage.getItem('tratamiento')){
                  this.psicologosSeleccionados.push(JSON.parse(JSON.stringify(psicologo)));
                }
              }
              
            }
          }
          else{
            for(let tratamiento of JSON.parse(JSON.stringify(psicologo)).tratamientos){
              if(tratamiento === localStorage.getItem('tratamiento')){
                this.psicologosSeleccionados.push(JSON.parse(JSON.stringify(psicologo)));
              }
            }
            
          }
        }
    
        
      },
      err => console.log(err)
    )
    
  }

}