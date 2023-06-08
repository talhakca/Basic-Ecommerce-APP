import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { CreateComment, UpdateProductRate } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { Comment, NewComment, OrderWithRelations, Product, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { CREATE_COMMENT_CONFIG } from './config/create-comment-form.config';

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
  newComment: Partial<NewComment> = {};
  isCommentModalVisible = false;
  commentedProduct: ProductWithRelations;

  CREATE_COMMENT_CONFIG = CREATE_COMMENT_CONFIG;
  isCommentSubmitted = false;
  isCommentValid = false;

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
      this.orderGroup = cloneDeep(inactiveCarts)?.reduce((acc, curr) => {
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
      console.log(this.orderGroup);
    })
  }

  subscribeToOrders() {
    return this.store.select(state => state.app.orders).subscribe(orders => {
      this.orders = orders;
    })
  }

  getShortDate(orderId) {
    if (orderId) {
      const date = this.orders?.find(order => order.id === orderId)?.createdDate;
      return moment(date).format('LL');
    }
  }

  getTotalQuantity(orderGroup) {
    return orderGroup?.productGroup?.reduce((acc, cur) => { return acc + cur.quantity }, 0);
  }

  onRate(product) {
    this.store.dispatch(UpdateProductRate({ payload: { productId: product.id, rating: product.rating } }));
  }

  openCommentModal(product) {
    this.commentedProduct = product;
    this.isCommentModalVisible = true;
  }

  cancelComment() {
    this.commentedProduct = null;
    this.isCommentModalVisible = false;
  }

  makeComment() {
    this.isCommentSubmitted = true;
    if (this.isCommentValid) {
      this.store.dispatch(CreateComment({ payload: { comment: { ...this.newComment, productId: this.commentedProduct.id } as NewComment } }));
      this.isCommentModalVisible = false;
    }
  }

  onCommentFormValidityChange(validity) {
    this.isCommentValid = validity;
  }

  onMessageChange(value) {
    this.newComment = value;
  }
}
