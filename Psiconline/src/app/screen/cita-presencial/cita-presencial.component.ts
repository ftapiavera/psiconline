import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Ciudad } from 'src/app/models/ciudades.model';
import { BusquedaService } from 'src/app/service/busqueda.service';

@Component({
  selector: 'app-cita-presencial',
  templateUrl: './cita-presencial.component.html',
  styleUrls: ['./cita-presencial.component.sass'],
  providers: [BusquedaService]
})
export class CitaPresencialComponent implements OnInit {
  public tratamientos: Tratamiento[]=[];
  public ciudades: Ciudad[]=[];
  public selectedTratamiento : Tratamiento={nombre:'',id:0};
  public selectedCiudad : Ciudad={nombre:'',id:0};

  constructor(private busquedaSvc: BusquedaService) {

  }

  public ngOnInit(): void {
    console.log(this.busquedaSvc.getCiudades());
    this.ciudades = this.busquedaSvc.getCiudades();
    this.tratamientos = this.busquedaSvc.getTratamientos();
  }


}
