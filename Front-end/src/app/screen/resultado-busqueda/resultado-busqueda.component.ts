import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';
import { BusquedaService } from 'src/app/service/busqueda.service';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.sass']
})
export class ResultadoBusquedaComponent implements OnInit {
  psicologos = [];

  constructor(public dataDemo: DatoDemoService,private BusquedaService: BusquedaService,private router: Router) {
    
  }

  ngOnInit(): void {
    this.BusquedaService.searchPsicologo()
    .subscribe(
      res => {
        this.psicologos = res;
      },
      err => console.log(err)
    )
  }

}