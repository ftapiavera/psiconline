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

  constructor(private busquedaSvc: BusquedaService,public dataDemo: DatoDemoService,private BusquedaService: BusquedaService,private router: Router) {
    
  }

 public ngOnInit(): void {
    
    this.BusquedaService.searchPsicologo()
    .subscribe(
      res => {
        this.psicologos=JSON.parse(JSON.stringify(res.psicologosAll));
        for(let psicologo of this.psicologos){
          if(JSON.parse(JSON.stringify(psicologo)).ciudad===localStorage.getItem('ciudad')){
            this.psicologosSeleccionados.push(JSON.parse(JSON.stringify(psicologo)));
          }
        }
        if(this.psicologosSeleccionados.length===0){
         
        }
        console.log(localStorage.getItem('tratamiento'));
    
        
      },
      err => console.log(err)
    )
    if(localStorage.getItem('tipoConsulta')==='presencial'){
      let ciu = console.log(localStorage.getItem('ciudad'));
    }
    else{

    }
    
  }

}