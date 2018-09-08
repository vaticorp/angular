import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/index';
import { AuthService } from '../../core/auth.service';

@Injectable()
export class GuestGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isUserLoggedIn()) {
      this.router.navigate(['tasks']);
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.isUserLoggedIn()) {
      this.router.navigate(['tasks']);
    }
    return true;
  }
}
