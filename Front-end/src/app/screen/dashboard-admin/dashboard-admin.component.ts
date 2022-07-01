import { Component, OnInit } from '@angular/core';
import { Psicologo } from 'src/app/models/psicologo.model';
import { DatoDemoService } from 'src/app/service/data-demo/dato-demo.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.sass']
})
export class DashboardAdminComponent implements OnInit {


  constructor(public dataDemo: DatoDemoService) {
    
  }

  ngOnInit(): void {
  }

}