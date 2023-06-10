import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { pathDefinitions } from 'src/app/features/shared/definitions';
import { TokenService } from '../services';
import { AuthState } from '../../data-stores/auth-data-store/state/auth-data-store.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState }>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    /* get token */
    return this.store.select(state => state.auth.user.role).pipe(
      map(role => {
        if (['productManager', 'salesManager'].includes(role?.key)) {
          return true;
        } else {
          this.router.navigateByUrl('/');
          return false;
        }
      })
    )
  }
}
