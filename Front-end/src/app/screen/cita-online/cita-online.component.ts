import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { BusquedaService } from 'src/app/service/busqueda.service';

@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.sass'],
  providers: [BusquedaService]
})
export class CitaOnlineComponent implements OnInit {
  public tratamientos: Tratamiento[]=[];
  public selectedTratamiento : Tratamiento={nombre:'',id:0};

  constructor(private busquedaSvc: BusquedaService) {

  }

  public ngOnInit(): void {
    console.log(this.busquedaSvc.getTratamientos());
    this.tratamientos = this.busquedaSvc.getTratamientos();
  }

}