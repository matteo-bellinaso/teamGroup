import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthguardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(root: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (state.url.indexOf('app-edit') != -1) {
      if (this.loginService.isLogged()) {
        if(this.loginService.isAdmin()){
          return true;
        } else{
          this.router.navigate(["/app-home"]);
          return false;
        }
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
      
    } else{
      if (this.loginService.isLogged()) {
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
    }
  }



}
