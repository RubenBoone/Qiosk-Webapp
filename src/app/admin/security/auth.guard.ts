import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkRoute(route,state);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkRoute(childRoute,state);
  }
  checkRoute(route: ActivatedRouteSnapshot, url: any): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getRole();
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['']);
          return false;
        }
          return true;
    } else {
      return this.router.parseUrl('/admin/login');
    }
  }
}
