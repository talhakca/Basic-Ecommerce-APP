import { Component, OnInit } from '@angular/core';
import { Cart } from '../../shared/sdk/models';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../data-stores/app-data-store/state/app-data-store.reducer';
import { RefundStatus } from './utils/refund-status.enum';
import { UpdateCart } from '../../data-stores/app-data-store/state/app-data-store.actions';

@Component({
  selector: 'app-refund-status',
  templateUrl: './refund-status.component.html',
  styleUrls: ['./refund-status.component.scss']
})
export class RefundStatusComponent implements OnInit {

  refundedCarts: Cart[];
  refundedCartsWithoutFilter: Cart[];
  subscriptions: Subscription[];
  statusOptions = [
    {
      key: 'Approved',
      value: RefundStatus.Approved
    },
    {
      key: 'Declined',
      value: RefundStatus.Declined
    },
    {
      key: 'Pending',
      value: RefundStatus.Pending
    }
  ];

  constructor(
    private store: Store<{ app: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToInactiveCarts()
    ]
  }

  subscribeToInactiveCarts() {
    return this.store.select(state => state.app.adminInactiveCarts).subscribe(inactiveCarts => {
      this.refundedCarts = inactiveCarts.filter(cart => cart.refundStatus).reduce((acc, cur) => {
        if (!acc.some(item => item.orderId == cur.orderId && cur.productId === item.productId)) {
          acc.push(cur);
        }
        return acc;
      }, []);
      this.refundedCartsWithoutFilter = inactiveCarts;
    });
  }

  getQuantity(orderId: string, productId: string) {
    return this.refundedCartsWithoutFilter.filter(cart => cart.orderId === orderId && cart.productId === productId)?.length
  }

  onStatusChange(cart, status: RefundStatus) {
    this.store.dispatch(UpdateCart({ payload: { id: cart.id, updatedCart: { refundStatus: status }, isInactive: true } }))
  }

}
