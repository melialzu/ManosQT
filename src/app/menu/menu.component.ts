import { Component } from '@angular/core';
import { faHouse, faHandPointUp,faCalendarDays, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  faHouse=faHouse
  faHandPointUp=faHandPointUp
  faCalendarDays=faCalendarDays
  faCameraRetro=faCameraRetro

}
