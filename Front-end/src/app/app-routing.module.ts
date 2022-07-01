import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponentComponent } from './screen/home-screen-component/home-screen-component.component';
import { CitaOnlineComponent } from './screen/cita-online/cita-online.component';
import { CitaPresencialComponent } from './screen/cita-presencial/cita-presencial.component';
import { AboutMeComponent } from './screen/about-me/about-me.component';
import { BlogComponent } from './screen/blog/blog.component';
import { LoginComponent } from './screen/login/login.component';
import { SignUpComponent } from './screen/sign-up/sign-up.component';
import { ResultadoBusquedaComponent } from './screen/resultado-busqueda/resultado-busqueda.component';
import { DashboardAdminComponent} from './screen/dashboard-admin/dashboard-admin.component';
import { CreatePsicologoComponent} from './screen/create-psico/create-psico.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeScreenComponentComponent},
  {path: 'citaOnline', component:CitaOnlineComponent},
  {path: 'citaPresencial',component:CitaPresencialComponent},
  {path: 'aboutMe',component:AboutMeComponent},
  {path: 'blog',component:BlogComponent},
  {path: 'login',component:LoginComponent},
  {path: 'signUp',component:SignUpComponent},
  {path: 'resultadoBusqueda',component:ResultadoBusquedaComponent},
  {path: 'adminDash', component:DashboardAdminComponent},
  {path: 'createPsicologo', component:CreatePsicologoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
