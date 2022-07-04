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
import { DashboardPacienteComponent } from './screen/dashboard-paciente/dashboard-paciente.component';
import { LoginAdminComponent } from './screen/loginAdmin/login-admin/login-admin.component';
import { DashMedicoComponent } from './screen/dash-medico/dash-medico.component';
import { LoginPsicologoComponent } from './screen/login-psicologo/login-psicologo.component';
import { ListPsicoComponent } from './screen/list-psico/list-psico.component';
import {PerfilMedicoComponent} from './screen/perfil-medico/perfil-medico.component';
import { PasswordAdminComponent } from './screen/password-admin/password-admin.component';
import { PasswordUserComponent } from './screen/password-user/password-user.component';
import { PasswordPsicoComponent } from './screen/password-psico/password-psico.component';

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
  {path: 'dashboard', component:DashboardPacienteComponent},
  {path: 'loginAdmin',component:LoginAdminComponent},
  {path: 'dashMedico', component:DashMedicoComponent},
  {path: 'loginPsico',component:LoginPsicologoComponent},
  {path: 'listPsicologos',component:ListPsicoComponent},
  {path: 'createPsicologo', component:CreatePsicologoComponent},
  {path: 'psicologoPerfil/:any', component:PerfilMedicoComponent},
  {path: 'cambioPasswordAdmin',component:PasswordAdminComponent},
  {path: 'cambioPasswordUser', component:PasswordUserComponent},
  {path: 'cambioPasswordPsico', component:PasswordPsicoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
