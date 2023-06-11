import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../data-stores/app-data-store/state/app-data-store.reducer';
import { AuthState } from '../../data-stores/auth-data-store/state/auth-data-store.reducer';
import { Subscription } from 'rxjs';
import { CartWithRelations, OrderWithRelations, UserWithRelations } from '../../shared/sdk/models';
import { cloneDeep, orderBy, sortBy } from 'lodash';
import { UpdateOrder } from '../../data-stores/app-data-store/state/app-data-store.actions';
import { OrderControllerService } from '../../shared/sdk/services';
import { FileSaverService } from 'ngx-filesaver';
@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss']
})
export class DeliveryListComponent implements OnInit {

  subscriptions: Subscription[];
  orders: OrderWithRelations[];
  user: UserWithRelations;
  carts: CartWithRelations[];

  statusOptions = [
    {
      key: 'In Transit',
      value: 'in-transit'
    },
    {
      key: 'Processing',
      value: 'processing'
    },
    {
      key: 'Delivered',
      value: 'delivered'
    }
  ];
  pdfSrc;

  constructor(
    private store: Store<{ app: AppState, auth: AuthState }>,
    private orderApi: OrderControllerService,
    private fileSaverService: FileSaverService
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToUsers(),
      this.subscribeToOrders(),
      this.subscribeToCarts()
    ];
  }

  subscribeToOrders() {
    return this.store.select(state => state.app.adminOrders).subscribe(orders => {
      console.log(this.user);
      this.orders = orderBy(cloneDeep(orders)?.map(order => ({ ...order, address: this.user.addresses.find(address => address.id === order.addressId) })), 'createdDate', 'desc');
      if (this.orders?.length && this.carts?.length) {
        this.orders = this.orders.map(order => ({ ...order, orderedProducts: this.carts?.filter(cart => cart.orderId === order.id) }));
      }
    });
  }

  subscribeToCarts() {
    return this.store.select(state => state.app.inactiveCarts).subscribe(carts => {
      this.carts = carts;
      if (this.orders?.length && this.carts?.length) {
        this.orders = orderBy(this.orders.map(order => ({ ...order, orderedProducts: this.carts?.filter(cart => cart.orderId === order.id) })), 'createdDate', 'desc');
      }
    })
  }

  subscribeToUsers() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      this.user = user;
    });
  }

  getProductsOfOrder(order: OrderWithRelations) {
    return order.orderedProducts?.reduce((acc, cur, index) => {
      acc = acc + (index === (order.orderedProducts?.length - 1) ? ', ' : '') + cur.productId;
      return acc;
    }, '');
  }

  onStatusChange(order, status: string) {
    this.store.dispatch(UpdateOrder({ payload: { id: order.id, updatedOrder: { status: status } } }));
  }

  getInvoiceFromOrderId(orderId: string) {
    this.orderApi.getInvoiceByOrderId({ id: orderId }).subscribe(data => {
      var blob = new Blob([data], { type: 'application/pdf' });
      console.log(blob)
      const reader = new FileReader();
      /* assign preview src to modal data */
      reader.onload = () => this.pdfSrc = <string>reader.result;
      reader.readAsDataURL(data);
      this.saveAs(blob, `${orderId}.pdf`);
    });
  }

  saveAs(blob: any, filename: string) {
    try {
      this.fileSaverService.save(blob, filename);
    }
    catch (e) {
      console.log(e);
    }
  }

}
