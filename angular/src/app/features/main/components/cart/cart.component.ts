import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CartState } from 'src/app/features/data-stores/cart-data-store/state/cart-data-store.reducer';
import { Product } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  subscriptions: Subscription[];
  cartData: {
    quantity: number;
    product: Product
  }[];
  fullPrice = 0;

  constructor(
    private store: Store<{ cartKey: CartState }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCarts()
    ];
  }

  subscribeToCarts() {
    return this.store.select(state => state.cartKey.cart).subscribe(cart => {
      this.cartData = cart.reduce((acc, cur) => {
        const productGroup = acc.find(productItem => productItem.product.id === cur.productId);
        this.fullPrice = this.fullPrice + this.getFinalPrice(cur.product);
        if (productGroup) {
          productGroup.quantity++;
        } else {
          acc.push({ quantity: 1, product: cur.product });
        }
        return acc;
      }, []);
    });
  }

  getFinalPrice(product) {
    if (product) {
      return product.discountRate ? (product.price * product.discountRate / 100) : product.price;
    }
  }

  goToCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
