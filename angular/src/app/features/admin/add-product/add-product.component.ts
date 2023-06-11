import { Component, OnInit } from '@angular/core';
import { CreateProduct } from '../../data-stores/app-data-store/state/app-data-store.actions';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../data-stores/app-data-store/state/app-data-store.reducer';
import { FormLayout, CrudViewFormItemType, CrudFormSelectItem, DynamicDataForSelectBox } from '../../rappider/components/lib/utils';
import { Product } from '../../shared/sdk/models';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

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
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ]
        },
        <CrudFormSelectItem>{
          title: 'Warranty Status',
          type: CrudViewFormItemType.Select,
          fieldName: 'warrantyStatus',
          options: [
            {
              key: 'Yes',
              value: 'yes'
            },
            {
              key: 'No',
              value: 'no'
            }
          ],
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ]

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
          type: CrudViewFormItemType.Select,
          fieldName: 'distributorId',
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ]
        },
        {
          title: 'Category',
          type: CrudViewFormItemType.Select,
          fieldName: 'categoryId',
          validators: [
            {
              type: Validators.required,
              errorKey: 'required',
              errorMessage: 'This field is required'
            }
          ]
        },
      ],
    };

  dynamicDataForSelectbox: DynamicDataForSelectBox[] = [
    {
      fieldName: 'categoryId',
      options: []
    },
    {
      fieldName: 'distributorId',
      options: []
    }
  ];

  constructor(
    private store: Store<{ app: AppState }>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  subscriptions: Subscription[];
  products: Product[];

  ngOnInit(): void {
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCategory(),
      this.subscribeToDistributors()
    ]
  }

  subscribeToCategory() {
    return this.store.select(state => state.app.categories).subscribe(categories => {
      if (categories?.length) {
        let categoryOptions = this.dynamicDataForSelectbox.find(item => item.fieldName === 'categoryId');
        categoryOptions.options = categories.map(category => ({ key: category.name, value: category.id }));
      }
    });
  }

  subscribeToDistributors() {
    return this.store.select(state => state.app.distributors).subscribe(distributors => {
      if (distributors?.length) {
        let distributorsOptions = this.dynamicDataForSelectbox.find(item => item.fieldName === 'distributorId');
        distributorsOptions.options = distributors.map(distributor => ({ key: distributor.name, value: distributor.id }));
      }
    });
  }

  formSubmit(product) {
    this.store.dispatch(CreateProduct({ payload: { product: product } }));
    this.router.navigateByUrl('/admin/products');
  }

}
