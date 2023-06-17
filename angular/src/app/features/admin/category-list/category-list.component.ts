import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DeleteCategory, GetCategories, InitApp } from '../../data-stores/category-data-store/state/category-data-store.actions';
import { CategoryState } from '../../data-stores/category-data-store/state/category-data-store.reducer';
import { CrudViewColumnType, ActionBehavior } from '../../rappider/components/lib/utils';
import { Category, CategoryWithRelations } from '../../shared/sdk/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

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
        title: 'Created Date',
        fieldName: 'createdDate',
        type: CrudViewColumnType.Date
      }
    ],
    listActions: [
      {
        name: 'new',
        text: 'New Category',
        behavior: ActionBehavior.Route,
        redirectUrl: 'admin/category-add',
        buttonType: 'primary'
      }
    ],
    itemActions: [
      {
        text: 'Edit',
        name: 'edit',
        behavior: ActionBehavior.Route,
        redirectUrl: 'admin/category-edit/{{id}}'
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
  categories: CategoryWithRelations[];
  isLoading: boolean;
  constructor(private store: Store<{ categoryKey: CategoryState }>) { }

  ngOnInit(): void {
    this.store.dispatch(GetCategories());
    this.subscribeToProductsLoading()
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCategories()
    ]
  }
  subscribeToCategories() {
    return this.store.select(state => state.categoryKey.categories).subscribe(data => {
      this.categories = data;
    });
  }
  onColumnActionClick(action) {
    console.log(action);
    if (action.action.name === 'Delete') {
      this.store.dispatch(DeleteCategory({ payload: { deletedCategoryId: action.data.id } }))
    }
  }
  subscribeToProductsLoading(): Subscription {
    return this.store
      .select((state) => state.categoryKey.isLoading)
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
        console.log(isLoading)
      });
  }


}
