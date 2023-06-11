import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DeleteProduct } from '../../data-stores/app-data-store/state/app-data-store.actions';
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
        title: 'Rate',
        fieldName: 'rating',
        type: CrudViewColumnType.Rate,
      },
      {
        title: 'Status',
        fieldName: 'status',
        type: CrudViewColumnType.Text
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
        ActionBehavior: ActionBehavior.Route,
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
  subscriptions: Subscription[];
  products: Product[];
  constructor(private store: Store<any>) { }

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
  onColumnActionClick(action) {
    console.log(action);
    if (action.action.name === 'Delete') {
      this.store.dispatch(DeleteProduct({ payload: { deletedProductId: action.data.id } }))
    }
  }




}
