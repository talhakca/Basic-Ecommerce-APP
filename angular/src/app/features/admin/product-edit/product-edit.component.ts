import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { act } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CreateProduct } from '../../data-stores/app-data-store/state/app-data-store.actions';
import { FormLayout, CrudViewFormItemType } from '../../rappider/components/lib/utils';
import { Product } from '../../shared/sdk/models';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  LIST_CREATE_CONFIG =
    {
      formLayout: FormLayout.Horizontal,
      items: [
        {
          title: 'Name',
          type: CrudViewFormItemType.TextBox,
          fieldName: 'name',
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ],
        },
        {
          title: 'Model',
          type: CrudViewFormItemType.TextBox,
          fieldName: 'model',
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ],
        },
        {
          title: 'Description',
          type: CrudViewFormItemType.TextArea,
          fieldName: 'description',
        },
        {
          title: 'Image Url',
          type: CrudViewFormItemType.TextBox,
          fieldName: 'imageUrl',
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ],
        },
        {
          title: 'Quantity In Stocks',
          type: CrudViewFormItemType.Number,
          fieldName: 'quantityInStocks',
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ],
        },
        {
          title: 'Price',
          type: CrudViewFormItemType.TextBox,
          fieldName: 'price',
        },
        {
          title: 'Warranty Status',
          type: CrudViewFormItemType.Select,
          fieldName: 'warrantyStatus',
        },
        {
          title: 'Rate',
          type: CrudViewFormItemType.Rate,
          fieldName: 'rating',
        },
        {
          title: 'Discount Rate',
          type: CrudViewFormItemType.Number,
          fieldName: 'discountRate',
        },
        {
          title: 'Distributor',
          type: CrudViewFormItemType.TextBox,
          fieldName: 'distributorId',
        },
        {
          title: 'Category',
          type: CrudViewFormItemType.TextBox,
          fieldName: 'categoryId',
        },
      ],
    }
  constructor(private store: Store<any>) { }

  subscriptions: Subscription[];
  products: Product[];

  ngOnInit(): void {
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToProducts()
    ]
  }
  subscribeToProducts() {
    return this.store.select(state => state.app.products).subscribe(data => {
      this.products = data;
    });
  }
  formSubmit(action) {
    console.log(action);
  }
}
