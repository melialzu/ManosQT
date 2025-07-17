import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoguinComponent } from '../loguin/loguin.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';




@NgModule({
  declarations: [
    LoguinComponent
   
   
  

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    

  
  ]
})
export class ReservaModule { }
