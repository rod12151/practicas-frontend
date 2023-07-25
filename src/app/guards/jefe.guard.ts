import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import {inject} from '@angular/core'
import { Observable } from 'rxjs';

export const jefeGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const isLogged= inject(AuthService).isLoggedIn();
  
  const roles = inject(AuthService).getRole();
  if(!isLogged || !roles.isJefe){
    return inject(Router).createUrlTree(["/","login"]);

  }else{
    return true;
  }
  
};