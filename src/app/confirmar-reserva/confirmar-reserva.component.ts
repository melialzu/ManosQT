import { Component, OnInit } from '@angular/core';
import { DatosReserva } from '../reserva/reserva.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../reserva/reserva.service';
import { faFaceSmile,faFaceSadTear } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html',
  styleUrls: ['./confirmar-reserva.component.scss']
})
export class ConfirmarReservaComponent implements OnInit{
  reserva!: DatosReserva;
  reservaCancelada: boolean = false;
  reservaConfirmada: boolean = false;
  faFaceSmile =faFaceSmile
  faFaceSadTear=faFaceSadTear
  
  constructor(private route: ActivatedRoute,private reservaService: ReservaService,private router: Router) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const reservaParam = params['reserva'];
      if (reservaParam) {
        this.reserva = JSON.parse(reservaParam);
      }
    });
  }
  cancelarReserva(id: number) {
    console.log('ID de reserva a eliminar:', id)
    // Llama al servicio para eliminar la reserva
    this.reservaService.deleteReserva(id).subscribe({
      next: () => {
        // La reserva se eliminó con éxito, redirige a otra página (por ejemplo, la página de inicio)
        this.reservaCancelada = true,
        this.reservaConfirmada = false;
      },
      error: (error) => {
        console.error('Error al cancelar la reserva:', error);
        // Maneja el error según sea necesario
      }
    });
   

  }
  confirmarReserva(id: number) {
    // Simplemente marca la reserva como confirmada
    this.reservaConfirmada = true;
    this.reservaCancelada = false; // Reinicia la cancelación
  }

      cerrarMensajeCancelacion() {
       // Cierra el mensaje de cancelación y permite al usuario continuar
     this.reservaCancelada = false;


  
    }
    cerrarMensajeConfirmacion() {
      // Cierra el mensaje de confirmación y permite al usuario continuar
      this.reservaConfirmada = false;
    }
  
  }
