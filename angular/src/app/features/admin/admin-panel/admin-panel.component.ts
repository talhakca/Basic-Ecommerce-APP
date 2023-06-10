import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from '../../data-stores/auth-data-store/state/auth-data-store.reducer';
import { Store } from '@ngrx/store';
import { UserWithRelations } from '../../shared/sdk/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit, OnDestroy {

  user: UserWithRelations;
  subscriptions: Subscription[];

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState }>
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => subs.unsubscribe());
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

  navigateToEditProduct() {
    this.router.navigateByUrl('/admin/edit-product');
  }
  navigateToEditCategory() {
    this.router.navigateByUrl('/admin/edit-category');
  }
  navigateToEditDist() {
    this.router.navigateByUrl('/admin/edit-distrubitor');
  }

  isSalesManager() {
    return this.user.role?.key === 'salesManager';
  }

  isProductManager() {
    return this.user.role?.key === 'productManager';
  }

  goToRefundStatus() {
    this.router.navigateByUrl('/admin/refund-status')
  }

  goToCommentStatus() {
    this.router.navigateByUrl('/comment-status')
  }

}
