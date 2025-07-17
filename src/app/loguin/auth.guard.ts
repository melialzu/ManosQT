import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(AuthService).isLoggedIn();
  if (!isLoggedIn) {
    inject(Router).navigateByUrl('/loguin');
  }
  return isLoggedIn;
};
