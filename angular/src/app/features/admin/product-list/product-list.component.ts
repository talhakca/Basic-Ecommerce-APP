import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthState } from '../../data-stores/auth-data-store/state/auth-data-store.reducer';
import { DeleteProduct, GetProducts, InitApp } from '../../data-stores/product-data-store/state/product-data-store.actions';
import { ProductState } from '../../data-stores/product-data-store/state/product-data-store.reducer';
import { CrudViewColumnType, ActionBehavior } from '../../rappider/components/lib/utils';
import { Product } from '../../shared/sdk/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  LIST_CONFIG = {
    defaultSearchField: 'name',
    columns: [
      {
        title: 'Id',
        fieldName: 'id',
        type: CrudViewColumnType.Text
      },
      {
        title: 'Name',
        fieldName: 'name',
        type: CrudViewColumnType.Text,
      },
      {
        title: 'Model',
        fieldName: 'model',
        type: CrudViewColumnType.Text,
      },
      {
        title: 'Rate',
        fieldName: 'rating',
        type: CrudViewColumnType.Rate,
      },
      {
        title: 'Description',
        fieldName: 'description',
        type: CrudViewColumnType.Text,
      },
      {
        title: 'Created Date',
        fieldName: 'createdDate',
        type: CrudViewColumnType.Date
      }
    ],
    listActions: [
      {
        name: 'new',
        text: 'New Product',
        behavior: ActionBehavior.Route,
        redirectUrl: 'admin/product-add',
        buttonType: 'primary'
      }
    ],
    itemActions: [
      {
        text: 'Edit',
        name: 'edit',
        behavior: ActionBehavior.Route,
        redirectUrl: 'admin/products-edit/{{id}}'
      },
      {
        text: 'Delete',
        name: 'Delete',
        behavior: ActionBehavior.Emit,
        icon: { name: 'far fa-trash' }
      },
    ]
  };
  isLoading: boolean;
  subscriptions: Subscription[];
  products: Product[];
  constructor(private store: Store<{ productKey: ProductState, auth: AuthState }>,) { }

  ngOnInit(): void {
    this.store.dispatch(GetProducts());
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToProducts(),
      this.subscribeToUser(),
      this.subscribeToProductsLoading()
    ]
  }
  subscribeToProducts() {
    return this.store.select(state => state.productKey.products).subscribe(data => {
      this.products = data;
    });
  }
  subscribeToProductsLoading(): Subscription {
    return this.store
      .select((state) => state.productKey.isLoading)
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
        console.log(isLoading)
      });
  }

  subscribeToUser() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      if (user?.role?.key === 'salesManager') {
        this.LIST_CONFIG.itemActions = this.LIST_CONFIG.itemActions.filter(action => action.name !== 'Delete');
        this.LIST_CONFIG = { ...this.LIST_CONFIG };
      }
    });
  }

  onColumnActionClick(action) {
    if (action.action.name === 'Delete') {
      this.store.dispatch(DeleteProduct({ payload: { deletedProductId: action.data.id } }))
    }
  }


}
