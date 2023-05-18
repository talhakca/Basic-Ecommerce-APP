import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LOGIN_CONFIG } from '../../../shared/configs';
import { pathDefinitions } from '../../../shared/definitions';
import { GetTokenByCrendentials } from 'src/app/features/data-stores/auth-data-store/state/auth-data-store.actions';

@Component({
  selector: 'rappider-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  subscriptions: Subscription[];

  /* login config */
  LOGIN_CONFIG = LOGIN_CONFIG;

  /* redirection paths */
  REGISTER_PAGE_PATH = pathDefinitions.auth.registerPath;
  HOME_PAGE_PATH = pathDefinitions.homePagePath;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  subscribeToData(): void {
    this.subscriptions = [this.subscribeToUserLoading()];
  }

  subscribeToUserLoading(): Subscription {
    return this.store
      .select((state) => state.auth.isLoading)
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
  }

  onLoginFormSubmit(credentials: any): void {
    this.store.dispatch(
      GetTokenByCrendentials({
        payload: {
          credentials,
          redirectUrl: this.HOME_PAGE_PATH,
        },
      })
    );
  }
}
