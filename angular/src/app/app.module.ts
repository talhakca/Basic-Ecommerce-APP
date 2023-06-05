/* Angular */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
/* language for localization */
import en from '@angular/common/locales/en';
registerLocaleData(en);

/* environment */
import { environment } from '@environment';

/* ng zorro */
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

/* ngx translate */
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* ngx lottie */
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Interceptors */
import { ErrorInterceptor } from './interceptors/error.interceptor';

/* Internal Modules */
import { SharedModule } from './features/shared/shared.module';
import { ApiModule } from './features/shared/sdk/api.module';
import { ComponentsModule } from './features/rappider/components';
import { defaultLanguage } from './features/shared/definitions/language';

/* Data Stores Module */
import { DataStoresModule } from './features/data-stores/data-stores.module';

/* Router Actions */
import * as RouterActions from './features/data-stores/router-data-store/state/router-data-store.actions';

/* Auth Interceptors */
import { TokenInterceptor } from './interceptors/token.interceptor';

/* Auth Data Store Actions */
import { LoginByToken } from './features/data-stores/auth-data-store/state/auth-data-store.actions';
import { TokenService } from './features/auth/services/token-service/token.service';
/* Components */
import { AppComponent } from './app.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

function subscribeToRouting(
  store: Store,
  router: Router,
  activatedRoute: ActivatedRoute
): Function {
  return () =>
    new Promise((resolve) => {
      router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          /* get current route if active route is in a child route */
          let currentRoute = activatedRoute.root;
          while (currentRoute.children[0] !== undefined) {
            currentRoute = currentRoute.children[0];
          }
          /* get & set url params */
          const params = currentRoute.snapshot.params;
          store.dispatch(RouterActions.SetParams({ payload: { params } }));
          /* get & set query params */
          const queryParams = currentRoute.snapshot.queryParams;
          store.dispatch(
            RouterActions.SetQueryParams({ payload: { queryParams } })
          );
          /* set active path */
          const currentRouteSnapshotUrl = (<any>currentRoute)._routerState
            .snapshot.url;
          store.dispatch(
            RouterActions.ActivePathChanged({
              payload: { path: currentRouteSnapshotUrl },
            })
          );
        }
      });
      resolve(true);
    });
}

function initAuthentication(
  store: Store<any>,
  tokenService: TokenService
): Function {
  return () =>
    new Promise((resolve) => {
      const token = tokenService.getToken();
      if (token) {
        store.dispatch(LoginByToken({ payload: { token } }));
      }
      resolve(true);
    });
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzBadgeModule,
    /* 3rd party modules */
    TranslateModule.forRoot({
      defaultLanguage: defaultLanguage.name,
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient) => new TranslateHttpLoader(httpClient),
        deps: [HttpClient],
      },
    }),

    /* internal modules */
    SharedModule,
    ComponentsModule,

    /* app routing module */
    AppRoutingModule,

    /* data stores */
    DataStoresModule,

    /* api sdk initialization */
    ApiModule.forRoot({
      rootUrl: environment['apiBaseUrl'] ?? 'http://localhost:4001',
    }),

    /* lottie module initialization */
    LottieModule.forRoot({ player: () => player }),
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: subscribeToRouting,
      multi: true,
      deps: [Store, Router, ActivatedRoute],
    },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initAuthentication,
      multi: true,
      deps: [Store, TokenService],
    },
    ,
    NzModalService,
    NzNotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
