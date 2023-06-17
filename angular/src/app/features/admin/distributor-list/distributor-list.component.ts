import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DeleteDistributor, GetDistributors } from '../../data-stores/distributor-data-store/state/distributor-data-store.actions';
import { DistributorState } from '../../data-stores/distributor-data-store/state/distributor-data-store.reducer';
import { CrudViewColumnType, ActionBehavior } from '../../rappider/components/lib/utils';
import { Distributor, Product } from '../../shared/sdk/models';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {

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
        text: 'New Distributor',
        behavior: ActionBehavior.Route,
        redirectUrl: 'admin/distributor-add',
        buttonType: 'primary'
      }
    ],
    itemActions: [
      {
        text: 'Edit',
        name: 'edit',
        behavior: ActionBehavior.Route,
        redirectUrl: 'admin/distributor-edit/{{id}}'
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
  distributors: Distributor[];
  constructor(private store: Store<{ distKey: DistributorState }>) { }

  ngOnInit(): void {
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToDistributors()
    ]
  }
  subscribeToDistributors() {
    return this.store.dispatch(GetDistributors()),
      this.store.select(state => state.distKey.distributors).subscribe(data => {
        this.distributors = data;
      });
  }
  onColumnActionClick(action) {
    console.log(action);
    if (action.action.name === 'Delete') {
      this.store.dispatch(DeleteDistributor({ payload: { deletedDistributorId: action.data.id } }))
    }
  }

}
