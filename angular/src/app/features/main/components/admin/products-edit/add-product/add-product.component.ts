import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PostProduct } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { Product } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

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
    distributorId: new FormControl(''),
    categoryId: new FormControl('')

  });

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.formProduct.valid) {
      console.log(this.formProduct.value);
    }
  }
  navigateToAdminPanel() {
    this.router.navigateByUrl('/admin');
  }

}
