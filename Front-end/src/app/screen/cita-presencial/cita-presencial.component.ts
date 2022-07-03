import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { Ciudad } from 'src/app/models/ciudades.model';
import { Router } from '@angular/router';
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
  public selectedTratamiento:any;
  public selectedCiudad:any;

  constructor(private busquedaSvc: BusquedaService,private BusquedaService: BusquedaService,private router: Router) {

  }

  public ngOnInit(): void {
    this.ciudades = this.busquedaSvc.getCiudades();
    this.tratamientos = this.busquedaSvc.getTratamientos();
  }
  busqueda(){
    if(this.selectedCiudad!==' ' && this.selectedTratamiento.nombre!==' '){
      localStorage.setItem('ciudad',this.selectedCiudad);
      localStorage.setItem('tipoConsulta','presencial');
      localStorage.setItem('tratamiento',this.selectedTratamiento);
      this.router.navigate(['/resultadoBusqueda']);
    }
    else{
      alert("Seleccione una opción");
    }
  
  }

}
