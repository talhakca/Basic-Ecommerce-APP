import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';

/* router-data-store actions */
import * as RouterDataStoreActions from 'src/app/features/data-stores/router-data-store/state/router-data-store.actions';

@Injectable()
export class RouterDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private router: Router
  ) {}

  navigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RouterDataStoreActions.Navigate),
      mergeMap((action) => {
        const path = action.payload.path;
        this.router.navigate([path]);
        return [];
      })
    )
  );
}
