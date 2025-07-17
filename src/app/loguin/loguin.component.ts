import { Component } from '@angular/core';
import { faCircleUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Loguin } from './loguin';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss']
})
export class LoguinComponent {
  model = new Loguin('', '');

  constructor(private authService: AuthService, private router: Router) {}

  loguin() {
    this.authService.Loguin(this.model.email, this.model.password).subscribe((userId) => {
      this.authService.userId = userId;
      localStorage.setItem('userId', JSON.stringify(userId));
      if (userId) {
        this.router.navigateByUrl('/landing');
      }
    })
  }
}