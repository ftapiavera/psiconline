import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { BusquedaService } from 'src/app/service/busqueda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita-online',
  templateUrl: './cita-online.component.html',
  styleUrls: ['./cita-online.component.sass'],
  providers: [BusquedaService]
})
export class CitaOnlineComponent implements OnInit {
  public tratamientos: Tratamiento[]=[];
  public selectedTratamiento:any;

  constructor(private router:Router,private BusquedaService: BusquedaService) {

  }

  public ngOnInit(): void {
    this.tratamientos = this.BusquedaService.getTratamientos();
  }

  busqueda(){
    if(this.selectedTratamiento.nombre!==' '){
      console.log(this.selectedTratamiento);
      localStorage.setItem('tipoConsulta','presencial');
      localStorage.setItem('tratamiento',this.selectedTratamiento);
      this.router.navigate(['/resultadoBusqueda']);
    }
    else{
      alert("Seleccione una opción");
    }
  
  }

}