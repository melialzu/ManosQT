import { Component } from '@angular/core';
import { ReservaService } from '../reserva/reserva.service';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.component.html',
  styleUrls: ['./misreservas.component.scss']
})
export class MisreservasComponent {

reservas:any[]  = []
  

constructor(private misreservasService: ReservaService,private reservaService: ReservaService) {}

ngOnInit(): void{

  this.misreservasService.getReservas().subscribe(data => {
    this.reservas = data;

  })

  }
  confirmarEliminacion(id: number) {
    const confirmacion = confirm('¿Está seguro que desea cancelar la reserva?');

        if (confirmacion) {
          // Si el usuario confirma, eliminar la reserva
            this.reservaService.deleteReserva(id).subscribe(() => {
          // Actualizar la lista de reservas después de la eliminación
            this.reservas = this.reservas.filter(reserva => reserva.id !== id);
    });
  }
}
}



