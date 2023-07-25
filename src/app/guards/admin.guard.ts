import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import {inject} from '@angular/core'
import { Observable } from 'rxjs';



export const adminGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const isLogged= inject(AuthService).isLoggedIn();
  
  const roles = inject(AuthService).getRole();
  if(!roles.isAdmin){
    return inject(Router).createUrlTree(["/","login"]);

  }else{
    return true;
  }
  
};
