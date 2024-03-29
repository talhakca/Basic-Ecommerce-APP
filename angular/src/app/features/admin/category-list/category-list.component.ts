import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DeleteCategory } from '../../data-stores/app-data-store/state/app-data-store.actions';
import { CrudViewColumnType, ActionBehavior } from '../../rappider/components/lib/utils';
import { Category } from '../../shared/sdk/models';

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
  categories: Category[];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCategories()
    ]
  }
  subscribeToCategories() {
    return this.store.select(state => state.app.categories).subscribe(data => {
      this.categories = data;
    });
  }
  onColumnActionClick(action) {
    console.log(action);
    if (action.action.name === 'Delete') {
      this.store.dispatch(DeleteCategory({ payload: { deletedCategoryId: action.data.id } }))
    }
  }


}
