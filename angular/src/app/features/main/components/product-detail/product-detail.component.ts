import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { formatDistance } from 'date-fns';
import { Subscription } from 'rxjs';
import { AddToCart } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { CartWithRelations, Category, CategoryWithRelations, DistributorWithRelations, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { CommentStatus } from '../comments-status/utils/comment-type';
import { cloneDeep } from 'lodash';
import { NotificationService } from 'src/app/features/shared/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  subscriptions: Subscription[];
  activeProductId: string;
  activeProduct: ProductWithRelations;
  categories: CategoryWithRelations[];
  activeCategory: CategoryWithRelations;
  distributor: DistributorWithRelations;
  carts: CartWithRelations[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ app: AppState }>,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToRoute(),
      this.subscribeToCategories(),
      this.subscribeToProducts(),
      this.subscribeToDistributors(),
      this.subscribeToCarts()
    ]
  }

  subscribeToRoute() {
    return this.activatedRoute.params.subscribe(params => {
      this.activeProductId = params.id;
    });
  }

  subscribeToCarts() {
    return this.store.select(state => state.app.cart).subscribe(carts => {
      this.carts = carts;
    })
  }

  subscribeToProducts() {
    return this.store.select(state => state.app.products).subscribe(products => {
      this.activeProduct = cloneDeep(products.find(product => product.id === this.activeProductId));
      if (this.activeProduct) {
        this.activeProduct.comments = this.activeProduct?.comments?.filter(comment => comment.status === CommentStatus.Approved);
        this.activeCategory = this.categories.find(category => this.activeProduct.categoryId === category.id);
      }
    })
  }

  subscribeToCategories() {
    return this.store.select(state => state.app.categories).subscribe(categories => {
      this.categories = categories;
    })
  }

  subscribeToDistributors() {
    return this.store.select(state => state.app.distributors).subscribe(distributors => {
      this.distributor = distributors.find(distributor => this.activeProduct.distributorId === distributor.id);
    })
  }

  addToCart() {
    const quantityInCart = this.carts?.filter(cart => cart.productId === this.activeProductId)?.length;
    if (quantityInCart < this.activeProduct.quantityInStocks) {
      this.notificationService.createNotification('error', `You have exceed the stock number. You can not add more then ${this.activeProduct.quantityInStocks}`, '')
    } else {
      this.store.dispatch(AddToCart({ payload: { productId: this.activeProductId } }));
    }
  }

  getTimeDiff(date) {
    return formatDistance(new Date(), new Date(date));
  }

}
