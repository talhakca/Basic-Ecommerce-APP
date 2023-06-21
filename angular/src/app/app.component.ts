import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { Logout } from './features/data-stores/auth-data-store/state/auth-data-store.actions';
import { GetCategories } from './features/data-stores/category-data-store/state/category-data-store.actions';
import { GetDistributors } from './features/data-stores/distributor-data-store/state/distributor-data-store.actions';
import { GetProducts } from './features/data-stores/product-data-store/state/product-data-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ECommerce';

  subscriptions: Subscription[];
  user;
  cart;

  constructor(
    private store: Store<any>, private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(InitApp());
    this.store.dispatch(GetCategories());
    this.store.dispatch(GetProducts());
    this.store.dispatch(GetDistributors())
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
      this.subscribeToCart(),
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

  logout() {
    this.store.dispatch(Logout());
  }

}
