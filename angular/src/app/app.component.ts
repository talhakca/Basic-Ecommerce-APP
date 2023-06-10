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
  cart;

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
      this.subscribeToUser(),
      this.subscribeToCart()
    ];
  }

  subscribeToUser() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  subscribeToCart() {
    return this.store.select(state => state.app.cart).subscribe(cart => {
      this.cart = cart;
    });
  }

  onRegisterClick() {
    this.router.navigateByUrl('/auth/register');
  }

  navigateToCartPage() {
    this.router.navigateByUrl('/cart');
  }

  goToPreviousPurchases() {
    this.router.navigateByUrl('/previously-purchased')
  }

  goToAdminPage() {
    this.router.navigateByUrl('/admin')
  }

}
