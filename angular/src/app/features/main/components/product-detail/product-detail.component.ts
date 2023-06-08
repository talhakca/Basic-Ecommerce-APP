import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { formatDistance } from 'date-fns';
import { Subscription } from 'rxjs';
import { AddToCart } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { Category, CategoryWithRelations, DistributorWithRelations, ProductWithRelations } from 'src/app/features/shared/sdk/models';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ app: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToRoute(),
      this.subscribeToCategories(),
      this.subscribeToProducts(),
      this.subscribeToDistributors()
    ]
  }

  subscribeToRoute() {
    return this.activatedRoute.params.subscribe(params => {
      this.activeProductId = params.id;
    });
  }

  subscribeToProducts() {
    return this.store.select(state => state.app.products).subscribe(products => {
      this.activeProduct = products.find(product => product.id === this.activeProductId);
      console.log(this.activeProduct)
      this.activeCategory = this.categories.find(category => this.activeProduct.categoryId === category.id);
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
    this.store.dispatch(AddToCart({ payload: { productId: this.activeProductId } }));
  }

  getTimeDiff(date) {
    return formatDistance(new Date(), new Date(date));
  }

}
