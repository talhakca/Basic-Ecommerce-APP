import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, mergeMap, tap } from 'rxjs/operators';

/* definitions */
import { authRedirectionPaths } from 'src/app/features/shared/definitions';

/* api services */
import { AuthControllerService } from 'src/app/features/shared/sdk/services';

/* services */
import { TokenService } from 'src/app/features/auth/services';

/* router data store actions */
import * as RouterDataStoreActions from '../../router-data-store/state/router-data-store.actions';

/* auth data store actions */
import * as AuthDataStoreActions from './auth-data-store.actions';
import { UsernameType } from 'src/app/features/auth/utils';

@Injectable()
export class AuthDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
    private authApi: AuthControllerService,
    private tokenService: TokenService
  ) { }

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.Register),
      mergeMap((action) =>
        this.authApi
          .register({
            body: action.payload.user,
          })
          .pipe(
            mergeMap((res) => {
              return [
                {
                  type: AuthDataStoreActions.ActionTypes.RegisterSuccessful,
                  payload: {
                    token: res.token,
                    redirectUrl:
                      action.payload.redirectUrl ??
                      authRedirectionPaths.register
                        .afterRegisterRedirectionPath,
                  },
                },
              ];
            }),
            catchError((error) => {
              return [
                { type: AuthDataStoreActions.ActionTypes.RegisterFailure },
              ];
            })
          )
      )
    )
  );

  registerSuccessful$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.RegisterSuccessful),
      mergeMap((action) => [
        {
          type: AuthDataStoreActions.ActionTypes.SetToken,
          payload: {
            token: action.payload.token,
          },
        },
        {
          type: AuthDataStoreActions.ActionTypes.LoginByToken,
          payload: {
            token: action.payload.token,
            redirectUrl: action.payload.redirectUrl,
          },
        },
      ])
    )
  );

  getTokenByCrendentials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.GetTokenByCrendentials),
      mergeMap((action) => {
        const credentials = {
          ...action.payload.credentials,
          usernameType: UsernameType.Email,
        };
        return this.authApi
          .login({
            body: credentials,
          })
          .pipe(
            mergeMap((res) => {
              return [
                {
                  type: AuthDataStoreActions.ActionTypes
                    .GetTokenByCrendentialsSuccessful,
                  payload: {
                    token: res.token,
                    redirectUrl: action.payload.redirectUrl,
                  },
                },
              ];
            }),
            catchError((error) => {
              return [
                {
                  type: AuthDataStoreActions.ActionTypes
                    .GetTokenByCrendentialsFailure,
                },
              ];
            })
          );
      })
    )
  );

  postTokenProcess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.GetTokenByCrendentialsSuccessful),
      mergeMap((action) => {
        return [
          {
            type: AuthDataStoreActions.ActionTypes.SetToken,
            payload: {
              token: action.payload.token,
            },
          },
          {
            type: AuthDataStoreActions.ActionTypes.LoginByToken,
            payload: {
              token: action.payload.token,
              redirectUrl: action.payload.redirectUrl,
            },
          },
        ];
      })
    )
  );

  loginByToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.LoginByToken),
      mergeMap((action) => {
        const isTokenExist = action.payload.token;
        if (isTokenExist) {
          return this.authApi.getUserByToken().pipe(
            mergeMap((user) => {
              return [
                {
                  type: AuthDataStoreActions.ActionTypes.LoggedIn,
                  payload: {
                    user,
                    redirectUrl: action.payload.redirectUrl,
                  },
                },
              ];
            }),
            catchError((error) => {
              return [
                { type: AuthDataStoreActions.ActionTypes.LoginByTokenFailure },
              ];
            })
          );
        } else {
          return [
            { type: AuthDataStoreActions.ActionTypes.LoginByTokenFailure },
          ];
        }
      })
    )
  );

  loginByTokenFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.LoginByTokenFailure),
      mergeMap((action) => [{ type: AuthDataStoreActions.ActionTypes.Logout }])
    )
  );

  setToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthDataStoreActions.SetToken),
        tap((action) => {
          const token = action.payload.token;
          this.tokenService.setToken(token);
        })
      ),
    { dispatch: false }
  );

  clearToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthDataStoreActions.ClearToken),
        tap((action) => {
          this.tokenService.clearToken();
        })
      ),
    { dispatch: false }
  );

  loggedIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.LoggedIn),
      mergeMap((action) => {
        const redirectUrl = action.payload.redirectUrl;
        const actions: any[] = [
          {
            type: AuthDataStoreActions.ActionTypes.SetUser,
            payload: { user: action.payload.user },
          },
        ];
        if (redirectUrl) {
          actions.push({
            type: RouterDataStoreActions.ActionTypes.Navigate,
            payload: { path: redirectUrl },
          });
        }
        return actions;
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.Logout),
      mergeMap((action) => {
        return [
          { type: AuthDataStoreActions.ActionTypes.ClearToken },
          {
            type: AuthDataStoreActions.ActionTypes.SetUser,
            payload: { user: null },
          },
          {
            type: RouterDataStoreActions.ActionTypes.Navigate,
            payload: { url: '/auth' },
          },
        ];
      })
    )
  );

  navigateToLoginPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.NavigateToLoginPage),
      mergeMap((action) => {
        return [
          {
            type: RouterDataStoreActions.ActionTypes.Navigate,
            payload: { url: '/auth/login' },
          },
        ];
      })
    )
  );

  navigateToRegisterPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthDataStoreActions.NavigateToRegisterPage),
      mergeMap((action) => {
        return [
          {
            type: RouterDataStoreActions.ActionTypes.Navigate,
            payload: { url: '/auth/register' },
          },
        ];
      })
    )
  );
}
