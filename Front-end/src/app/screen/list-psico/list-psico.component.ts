import { Component, OnInit } from '@angular/core';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';
import { BusquedaService } from 'src/app/service/busqueda.service';

@Component({
  selector: 'app-list-psico',
  templateUrl: './list-psico.component.html',
  styleUrls: ['./list-psico.component.sass'],
  providers: [BusquedaService]
})
export class ListPsicoComponent implements OnInit {
  psicologos = [];
  listPsicologos:Array<any> = [];
  constructor(private BusquedaService: BusquedaService,private router: Router) { }

  ngOnInit(): void {
    this.BusquedaService.searchPsicologo()
    .subscribe(
      res => {
        this.psicologos=JSON.parse(JSON.stringify(res.psicologosAll))   
        for(let psicologo of this.psicologos){
          this.listPsicologos.push(JSON.parse(JSON.stringify(psicologo)));
        }
      },
      err => console.log(err)
    )
  }

  eliminarPsico(psicologo:any){
    console.log(psicologo);
    
    this.BusquedaService.deletePsicologo(psicologo);
    this.ngOnInit();
    //this.router.navigate(['/listPsicologos']);
  }
}
