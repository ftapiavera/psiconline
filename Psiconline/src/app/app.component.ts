import { Component } from '@angular/core';
import {DatoDemoService} from './service/data-demo/dato-demo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Psiconline';

  private profesionales:any = {};

  constructor (private service: DatoDemoService){}

  ngOnInit(){
    this.service.get_profesionales().subscribe((profesionales: any) => {
      this.profesionales = profesionales;
    })
  }

}
