import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { PriceService } from '../../services/price/price.service';
import { Store } from '@ngrx/store';
import { OrderControllerService } from 'src/app/features/shared/sdk/services';
import { AuthState } from 'src/app/features/data-stores/auth-data-store/state/auth-data-store.reducer';
import { Address, Cart } from 'src/app/features/shared/sdk/models';
import { CreateOrder } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/features/shared/services';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  stripeClientSecret: string;
  subscriptions: Subscription[];
  amount: number;
  addresses: Address[];
  selectedAddress: Address;
  paymentLoading = true;
  stripeSubmitButton = {
    text: 'Make Payment',
    type: 'primary'
  };
  carts: Cart[];

  constructor(
    private store: Store<{ app: AppState, auth: AuthState }>,
    private priceService: PriceService,
    private orderService: OrderControllerService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCart(),
      this.subscribeToUser()
    ];
  }

  subscribeToCart() {
    return this.store.select(state => state.app.cart).subscribe(cart => {
      this.carts = cart;
      if (cart?.length) {
        this.amount = cart.reduce((acc, cur) => {
          acc = acc + this.priceService.getFinalPrice(cur.product);
          return acc;
        }, 0);
        if (this.amount) {
          this.createPaymentIntent()
        } else {
          this.router.navigateByUrl('');
          this.notificationService.createNotification('error', 'Your cart is empty', 'Please add some products to your cart to be able to checkout')
        }
      }
    });
  }

  subscribeToUser() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      this.addresses = user?.addresses;
      console.log(this.addresses)
    })
  }

  getFinalPrice(product) {
    if (product) {
      return product.discountRate ? (product.price * product.discountRate / 100) : product.price;
    }
  }

  createPaymentIntent() {
    this.orderService.createIntent({ body: { amount: this.amount * 100 } }).subscribe(res => {
      this.stripeClientSecret = res.client_secret;
      this.paymentLoading = false;
    });
  }

  onSelectAddress(address: Address) {
    this.selectedAddress = address;
  }

  onPaymentSuccess(payment) {
    this.store.dispatch(CreateOrder({ payload: { order: { paymentId: payment.paymentIntent.id, price: this.amount, status: 'processing', orderedProducts: this.carts, addressId: this.selectedAddress.id } } }))
  }

}
