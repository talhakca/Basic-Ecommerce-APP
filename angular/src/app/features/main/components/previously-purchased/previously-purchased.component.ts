import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { Product } from 'src/app/features/shared/sdk/models';

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

  constructor(
    private store: Store<{ app: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToInactiveCarts()
    ];
  }

  subscribeToInactiveCarts() {
    return this.store.select(state => state.app.inactiveCarts).subscribe(inactiveCarts => {
      console.log(inactiveCarts)
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
            console.log(order)
            order.productGroup.push({ quantity: 1, product: curr.product });
          }
        } else {
          console.log(acc)
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
      console.log(this.orderGroup);
    })
  }

}
