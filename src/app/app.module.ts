import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReservaComponent } from './reserva/reserva.component';
import { ReservaModule } from './reserva/reserva.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmarReservaComponent } from './confirmar-reserva/confirmar-reserva.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { LandingComponent } from './landing/landing.component';
import { MisreservasComponent } from './misreservas/misreservas.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api.interceptor';
import { UsersComponent } from './users/users.component';
import { LoguinComponent } from './loguin/loguin.component';





@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    FooterComponent,
    HeaderComponent,
    ConfirmarReservaComponent,
    Pagina1Component,
    LandingComponent,
    MisreservasComponent,
    MenuComponent,
    InicioComponent,
    NavbarComponent,
    ProfileWidgetComponent,
    UsersComponent,
    
   
  
    

  
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ReservaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
