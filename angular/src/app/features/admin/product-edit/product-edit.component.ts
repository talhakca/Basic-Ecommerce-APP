import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { act } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CreateProduct, UpdateProduct } from '../../data-stores/app-data-store/state/app-data-store.actions';
import { FormLayout, CrudViewFormItemType, CrudFormSelectItem, DynamicDataForSelectBox } from '../../rappider/components/lib/utils';
import { Product, UserWithRelations } from '../../shared/sdk/models';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../data-stores/app-data-store/state/app-data-store.reducer';
import { AuthState } from '../../data-stores/auth-data-store/state/auth-data-store.reducer';

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
          type: CrudViewFormItemType.Number,
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

  updatedProduct: Partial<Product>;

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
    private store: Store<{ app: AppState, auth: AuthState }>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  subscriptions: Subscription[];
  products: Product[];
  activeProduct: Product;
  activeProductId: string;
  user: UserWithRelations;

  ngOnInit(): void {
    this.subscribeToRoute();
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToProducts(),
      this.subscribeToCategory(),
      this.subscribeToDistributors(),
      this.subscribeToUser()
    ]
  }
  subscribeToProducts() {
    return this.store.select(state => state.app.products).subscribe(data => {
      this.products = data;
      if (this.products?.length) {
        this.activeProduct = this.products.find(product => product.id === this.activeProductId);
      }
    });
  }

  subscribeToUser() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      this.user = user;
      if (this.user?.role?.key === 'productManager') {
        this.LIST_CREATE_CONFIG.items = this.LIST_CREATE_CONFIG.items.map(item => {
          if (item.fieldName !== 'quantityInStocks') {
            return { ...item, disabled: true };
          } else {
            return item;
          }
        })
      } else if (this.user?.role?.key === 'salesManager') {
        this.LIST_CREATE_CONFIG.items = this.LIST_CREATE_CONFIG.items.map(item => {
          if (!['discountRate', 'price'].includes(item.fieldName)) {
            return { ...item, disabled: true };
          } else {
            return item;
          }
        })
      }
    });
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

  subscribeToRoute() {
    this.activeProductId = this.activatedRoute.snapshot.params.id;
  }
  formSubmit() {
    this.store.dispatch(UpdateProduct({ payload: { id: this.activeProductId, updatedProduct: this.updatedProduct } }));
    this.router.navigateByUrl('/admin/products');
  }

  onFormValueChange(data) {
    this.updatedProduct = {
      ...this.updatedProduct,
      ...data
    };
    console.log(this.updatedProduct)
  }
}
