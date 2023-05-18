import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { pathDefinitions } from 'src/app/features/shared/definitions';
import { TokenService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    /* get token */
    const token = this.tokenService.getToken();
    if (!token) {
      /* redirect to login page */
      this.router.navigateByUrl(pathDefinitions.auth.loginPath);
    }
    return true;
  }
}
