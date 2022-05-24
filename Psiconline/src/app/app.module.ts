import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
