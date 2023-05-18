import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'E Learning';

  subscriptions: Subscription[];
  user;

  constructor(
    private store: Store<any>, private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(InitApp());
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  onLoginClick() {
    this.router.navigateByUrl('/auth/login');
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToUser()
    ];
  }

  subscribeToUser() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  onRegisterClick() {
    this.router.navigateByUrl('/auth/register');
  }
}
