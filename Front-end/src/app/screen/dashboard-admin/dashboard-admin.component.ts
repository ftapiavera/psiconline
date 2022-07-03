import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.sass']
})
export class DashboardAdminComponent implements OnInit {


  constructor(public dataDemo: DatoDemoService,private router: Router) {
    
  }

  ngOnInit(): void {
  }

  listarPsicologos(){
    this.router.navigate(['/listPsicologos']);
  }
  crearPsicologo(){
    this.router.navigate(['/createPsicologo']);
  }

}