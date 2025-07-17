import { Component } from '@angular/core';
import { faBars, faHouse, faPersonBooth, faCalendarDays, faCalendar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../loguin/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  faBars=faBars
  faHouse=faHouse
  faPersonBooth=faPersonBooth
  faCalendarDays=faCalendarDays
  faCalendar=faCalendar
  faRightFromBracket=faRightFromBracket

  isSidebarOpen = false;
  user: undefined;

  constructor(private authService: AuthService, private router: Router, private userService: UsersService) {}

  showSidebar() {
    this.isSidebarOpen = true;
  }


  hideSidebar() {
    this.isSidebarOpen = false;


  }
  logout() {
    this.authService.logout();
    this.user = undefined
    this.router.navigateByUrl(' ');
  }


}
