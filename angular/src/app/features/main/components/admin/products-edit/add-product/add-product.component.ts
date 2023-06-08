import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GetCategoriesSuccessful, InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { Category, Product } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categories: Category[] = [];
  subscriptions: Subscription[];
  displayedCategories = [];
  constructor(private router: Router, private store: Store<AppState>) { }
  formProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    number: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
    quantityInStocks: new FormControl(0, [Validators.required, Validators.min(0)]),
    price: new FormControl(0),
    warrantyStatus: new FormControl(''),
    rating: new FormControl(0),
    discountRate: new FormControl(0),
    isDeleted: new FormControl(true),
    // distributorId: new FormControl(''),
    categoryId: new FormControl('')

  });

  ngOnInit(): void {
    this.subscribeToData();
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCategories()
    ];
  }

  subscribeToCategories() {
    return this.store.select(state => state.categories).subscribe(data => {
      this.categories = data;
      this.displayedCategories = this.categories;
    })
  }

  onSubmit() {
    if (this.formProduct.valid) {
      console.log(this.formProduct.value);
    }
  }
  navigateToAdminPanel() {
    this.router.navigateByUrl('/admin');
  }
  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());

  }

}
