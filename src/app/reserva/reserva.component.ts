import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservaService } from './reserva.service';
import { DatosReserva } from './reserva.model';
import { Router } from '@angular/router';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss'],
  
})
export class ReservaComponent {

  reservaForm= new FormGroup({
     
      fechaReserva: new FormControl<Date>(new Date()),
      tiempoReserva: new FormControl(''),
      horaReserva: new FormControl (''),
      espacio: new FormControl (''),
         

    
  })
  selectedTime: string = ''; // Para almacenar la hora seleccionada
  showThreeHourOption: boolean = true; // Inicializamos con el radio buttom de 3 horas visible 
  dateInPast: boolean = false; // Para mostrar el aviso de fecha en el pasado
  disableButton: boolean = false; // Inicialmente, el botón está habilitado
  message: string = ''; // Variable para almacenar el mensaje
  showMessage: boolean = false;
  selectedDate: string = '';
  selectedDuration: string = '';
  faRocket= faRocket


constructor(private reservaService: ReservaService, private router: Router){
  this.dateInPast = false
}


  reserva(){
    console.log(this.reservaForm.value)
    this.reservaService.save(this.reservaForm.value as DatosReserva).subscribe((newReserva) => {
    console.log('new reserva', newReserva);
    this.router.navigate(['/confirmar-reserva'], { queryParams: { reserva: JSON.stringify(newReserva) } })

    })
    
  }

  onTimeChange(event: any) {
    this.selectedTime = event.target.value;
    console.log('Selected Time:', this.selectedTime);
   
    

    // Ocultar el radio button de 3 horas si la hora es 16:00 o 17:00
    this.showThreeHourOption = this.selectedTime !== '16:00' && this.selectedTime !== '17:00';
  }
  onDateChange(event: any) {

    //const selectedDateObject = event.target.value
    //console.log (selectedDateObject)   

    const selectedDateString = event.target.value;
    const selectedDate = new Date(selectedDateString); 
    selectedDate.setDate(selectedDate.getDate() + 1);
    console.log (selectedDate )
    
    const currentDate = new Date()
    console.log (currentDate)
  

    if (selectedDate < currentDate) {
        this.dateInPast = true;
       // console.log(selectedDateObject)
       // console.log(currentDate)
        


    } else {
        this.dateInPast = false;
           
 } 
}

}