import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LandingComponent } from './landing/landing.component';
import { ConfirmarReservaComponent } from './confirmar-reserva/confirmar-reserva.component';
import { MisreservasComponent } from './misreservas/misreservas.component';
import { LoguinComponent } from './loguin/loguin.component';
import { authGuard } from './loguin/auth.guard';
import { UsersComponent } from './users/users.component';
import { ProfileWidgetComponent } from './profile-widget/profile-widget.component';



const routes: Routes = [
   
  { path: 'reserva', component: ReservaComponent,canActivate: [authGuard] },
  { path: 'landing', component: LandingComponent, canActivate: [authGuard]},
  { path: 'confirmar', component: ConfirmarReservaComponent},
  { path: 'misreservas', component: MisreservasComponent},
  { path: 'confirmar-reserva', component: ConfirmarReservaComponent },
  { path: 'loguin', component: LoguinComponent },
  { path: 'activate', component: UsersComponent},
   { path: '', component: Pagina1Component, pathMatch: 'full' }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
