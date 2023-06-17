import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { formatDistance } from 'date-fns';
import { Subscription } from 'rxjs';
import { AddToCart } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { CartWithRelations, CategoryWithRelations, DistributorWithRelations, ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { CommentStatus } from '../comments-status/utils/comment-type';
import { cloneDeep } from 'lodash';
import { NotificationService } from 'src/app/features/shared/services';
import { ProductState } from 'src/app/features/data-stores/product-data-store/state/product-data-store.reducer';
import { CategoryState } from 'src/app/features/data-stores/category-data-store/state/category-data-store.reducer';
import { GetProducts } from 'src/app/features/data-stores/product-data-store/state/product-data-store.actions';
import { GetCategories } from 'src/app/features/data-stores/category-data-store/state/category-data-store.actions';
import { DistributorState } from 'src/app/features/data-stores/distributor-data-store/state/distributor-data-store.reducer';
import { GetDistributors } from 'src/app/features/data-stores/distributor-data-store/state/distributor-data-store.actions';

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
    private store: Store<{ distKey: DistributorState, app: AppState, productKey: ProductState, categoryKey: CategoryState }>,
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
    return this.store.dispatch(GetProducts()),
      this.store.select(state => state.productKey.products).subscribe(products => {
        this.activeProduct = cloneDeep(products.find(product => product.id === this.activeProductId));
        if (this.activeProduct) {
          this.activeProduct.comments = this.activeProduct?.comments?.filter(comment => comment.status === CommentStatus.Approved);
          this.activeCategory = this.categories.find(category => this.activeProduct.categoryId === category.id);
        }
      })
  }

  subscribeToCategories() {
    return this.store.dispatch(GetCategories()),
      this.store.select(state => state.categoryKey.categories).subscribe(categories => {
        this.categories = categories;
      })
  }

  subscribeToDistributors() {
    return this.store.dispatch(GetDistributors()),
      this.store.select(state => state.distKey.distributors).subscribe(distributors => {
        this.distributor = distributors.find(distributor => this.activeProduct.distributorId === distributor.id);
      })
  }

  addToCart() {
    const quantityInCart = this.carts?.filter(cart => cart.productId === this.activeProductId)?.length;
    if (this.activeProduct.quantityInStocks <= quantityInCart) {
      this.notificationService.createNotification('error', `You have exceed the stock number. You can not add more then ${this.activeProduct.quantityInStocks}`, '')
    } else {
      this.store.dispatch(AddToCart({ payload: { productId: this.activeProductId } }));
    }
  }

  getTimeDiff(date) {
    return formatDistance(new Date(), new Date(date));
  }

}
