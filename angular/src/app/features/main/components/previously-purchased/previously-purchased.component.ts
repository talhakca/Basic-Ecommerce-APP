import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { OrderWithRelations, Product } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-previously-purchased',
  templateUrl: './previously-purchased.component.html',
  styleUrls: ['./previously-purchased.component.scss']
})
export class PreviouslyPurchasedComponent implements OnInit {

  subscriptions: Subscription[];
  orderGroup: {
    orderId: string,
    productGroup: { quantity: number, product: Product }[]
  }[];
  orders: OrderWithRelations[];

  constructor(
    private store: Store<{ app: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToInactiveCarts(),
      this.subscribeToOrders()
    ];
  }

  subscribeToInactiveCarts() {
    return this.store.select(state => state.app.inactiveCarts).subscribe(inactiveCarts => {
      this.orderGroup = inactiveCarts?.reduce((acc, curr) => {
        const order: {
          orderId: string,
          productGroup: { quantity: number, product: Product }[]
        } = acc?.find(item => item.orderId === curr.orderId);
        if (order) {
          const addedProduct = order.productGroup.find(group => group.product.id === curr.productId);
          if (addedProduct) {
            addedProduct.quantity++;
          } else {
            order.productGroup.push({ quantity: 1, product: curr.product });
          }
        } else {
          acc.push(
            {
              orderId: curr.orderId,
              productGroup: [
                {
                  quantity: 1,
                  product: curr.product
                }
              ]
            }
          );
        }
        return acc;
      }, []);
    })
  }

  subscribeToOrders() {
    return this.store.select(state => state.app.orders).subscribe(orders => {
      this.orders = orders;
    })
  }

  getShortDate(orderId) {
    return moment(this.orders?.find(order => order.id === orderId).createdDate).format('LL');
  }

  getTotalQuantity(orderGroup) {
    return orderGroup?.productGroup?.reduce((acc, cur) => { return acc + cur.quantity }, 0);
  }

}
