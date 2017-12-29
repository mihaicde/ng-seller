import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate() {
  //   return this.authService.isLoggedIn();
  // }

  canActivate() {
    if(this.authService.isLoggedIn()) {
      return true;
    } else {
      window.alert('Forbidden access! Please log in!');
      this.router.navigateByUrl('/login');
      // this.router.navigate(['unauthorized']);
      return false;
    }
  }
}
