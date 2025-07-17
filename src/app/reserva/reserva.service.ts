import { Injectable } from '@angular/core';
import { DatosReserva } from './reserva.model';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReservaService {



  constructor(private httpClient: HttpClient) {

  }
  save(datosReserva: DatosReserva): Observable<DatosReserva> {
    return this.httpClient.post<DatosReserva>('reservas', datosReserva)
  }


  getReservas(): Observable<any[]> {
    return this.httpClient.get<any[]>('reservas',)
  }



  deleteReserva(id: number): Observable<any> {
    const url = `reservas/${id}`
    return this.httpClient.delete(url)
  }



}




