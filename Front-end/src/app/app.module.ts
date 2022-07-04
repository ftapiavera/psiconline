import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeScreenComponentComponent } from './screen/home-screen-component/home-screen-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { CitaOnlineComponent } from './screen/cita-online/cita-online.component';
import { CitaPresencialComponent } from './screen/cita-presencial/cita-presencial.component';
import { AboutMeComponent } from './screen/about-me/about-me.component';
import { BlogComponent } from './screen/blog/blog.component';
import { SignUpComponent } from './screen/sign-up/sign-up.component';
import { LoginComponent } from './screen/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { ResultadoBusquedaComponent } from './screen/resultado-busqueda/resultado-busqueda.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DatoDemoService} from './service/data-demo/dato-demo.service';
import { NavDashboardPsicologoComponent } from './components/nav-dashboard-psicologo/nav-dashboard-psicologo.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './screen/loginAdmin/login-admin/login-admin.component';
import { MensajePacienteComponent } from './screen/mensaje-paciente/mensaje-paciente.component';
import { PerfilPacienteComponent } from './screen/perfil-paciente/perfil-paciente.component';
import { DashMedicoComponent } from './screen/dash-medico/dash-medico.component';
import { PerfilMedicoComponent } from './screen/perfil-medico/perfil-medico.component';
import { PacientesMedicoComponent } from './screen/pacientes-medico/pacientes-medico.component';
import { HistorialMedicoComponent } from './screen/historial-medico/historial-medico.component';
import { CitasMedicoComponent } from './screen/citas-medico/citas-medico.component';
import { DisponibilidadMedicoComponent } from './screen/disponibilidad-medico/disponibilidad-medico.component';
import { ListPsicoComponent } from './screen/list-psico/list-psico.component';
import { LoginPsicologoComponent } from './screen/login-psicologo/login-psicologo.component';
import { NavDashboardPacienteComponent } from './components/nav-dashboard-paciente/nav-dashboard-paciente.component';
import { NavDashboardAdminComponent } from './components/nav-dashboard-admin/nav-dashboard-admin.component';
import { CreatePsicologoComponent } from './screen/create-psico/create-psico.component';
import { PasswordAdminComponent } from './screen/password-admin/password-admin.component';
import { PasswordPsicoComponent } from './screen/password-psico/password-psico.component';
import { PasswordUserComponent } from './screen/password-user/password-user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeScreenComponentComponent,
    FooterComponent,
    CitaOnlineComponent,
    CitaPresencialComponent,
    AboutMeComponent,
    BlogComponent,
    SignUpComponent,
    LoginComponent,
    SearchComponent,
    ResultadoBusquedaComponent,
    NavDashboardPsicologoComponent,
    LoginAdminComponent,
    MensajePacienteComponent,
    PerfilPacienteComponent,
    DashMedicoComponent,
    PerfilMedicoComponent,
    PacientesMedicoComponent,
    HistorialMedicoComponent,
    CitasMedicoComponent,
    DisponibilidadMedicoComponent,
    ListPsicoComponent,
    LoginPsicologoComponent,
    NavDashboardPacienteComponent,
    NavDashboardAdminComponent,
    CreatePsicologoComponent,
    PasswordAdminComponent,
    PasswordPsicoComponent,
    PasswordUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [DatoDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
