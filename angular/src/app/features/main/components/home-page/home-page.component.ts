/*
  Page ID: f1e9f9fa-5d58-4894-8482-6de4a219aec2
  Page Name: HomePage
  Page Slug: 
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import * as lodash from 'lodash';
import { ProductWithRelations } from 'src/app/features/shared/sdk/models';
import { CardOneListCardClickOutput, HeadingType, IconType, TagType } from 'src/app/features/rappider/components/lib/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'e-learning-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  /* state subscriptions */
  subscriptions: Subscription[];

  products: ProductWithRelations[];
  displayedProducts = [];

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToProducts()
    ];
  }

  subscribeToProducts() {
    return this.store.select(state => state.app.product).subscribe(products => {
      this.products = products;
      if (products?.length) {
        this.displayedProducts = this.products.map(product => (
          {
            data: product,
            image: {
              source: product.imageUrl,
              width: '300px'
            },
            imageTags: [{
              text: product.category
            }],
            currency: 'usd',
            price: product.price,
            finalPrice: product.price - (product.price * product.discountRate / 100),
            descriptions: [{
              content: product.description
            }],
            titles: [
              {
                type: HeadingType.H3,
                content: product.name
              }
            ],
            rate: product.rating
          }));
      }
    });
  }

  onProductClick(action: CardOneListCardClickOutput) {
    console.log(action)
    this.router.navigateByUrl(`detail/${action.data.data.id}`);
  }
}
