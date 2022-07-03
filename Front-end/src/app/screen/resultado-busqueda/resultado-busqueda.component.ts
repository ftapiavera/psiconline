import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Ciudad } from 'src/app/models/ciudades.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';
import { BusquedaService } from 'src/app/service/busqueda.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.sass'],
  providers: [BusquedaService]
})
export class ResultadoBusquedaComponent implements OnInit {
  psicologos = [];
  psicologosSeleccionados = [];

  constructor(private busquedaSvc: BusquedaService,public dataDemo: DatoDemoService,private BusquedaService: BusquedaService,private router: Router) {
    
  }

 public ngOnInit(): void {
    this.BusquedaService.searchPsicologo()
    .subscribe(
      res => {
        this.psicologos=JSON.parse(JSON.stringify(res.psicologosAll));
        for(let psicologo1 of this.psicologos){
          console.log(JSON.parse(JSON.stringify(psicologo1)).nombre);
          this.psicologosSeleccionados=JSON.parse(JSON.stringify(psicologo1));
        }
        
      },
      err => console.log(err)
    )
  
  }

}