import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { Tratamiento } from 'src/app/models/tratamiento.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { BusquedaService } from 'src/app/service/busqueda.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-psico',
  templateUrl: './create-psico.component.html',
  styleUrls: ['./create-psico.component.sass'],
  providers: [BusquedaService]
})
export class CreatePsicologoComponent implements OnInit {
  public tratamientos: Tratamiento[]=[];
  public selectedTratamiento:any;
  public consultas:Array<String>=["presencial","online"];
  public selectedConsulta:any;
  public ciudades: Tratamiento[]=[];
  public selectedCiudad:any;
  public user:any = {};


  constructor(public dataDemo: DatoDemoService,private router:Router,private BusquedaService: BusquedaService,private authService: AuthService) {
    
  }

  ngOnInit(): void {
    this.tratamientos = this.BusquedaService.getTratamientos();
    this.ciudades = this.BusquedaService.getCiudades();
  }

  crearPsico(){
    this.user.ciudad = this.selectedCiudad;
    this.user.tratamientos.push(this.selectedTratamiento);
    this.user.tipoConsulta.push(this.selectedConsulta);
    console.log(this.user);
    this.authService.signUpPsico(this.user)
    .subscribe(res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        alert("se registró el psicologo correctamente")
        this.router.navigate(['/adminDash']);
      },
      err => console.log(err)
    )
  }

}