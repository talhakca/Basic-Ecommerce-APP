import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../data-stores/app-data-store/state/app-data-store.reducer';
import { UpdateDistributor } from '../../data-stores/distributor-data-store/state/distributor-data-store.actions';
import { DistributorState } from '../../data-stores/distributor-data-store/state/distributor-data-store.reducer';
import { FormLayout, CrudViewFormItemType } from '../../rappider/components/lib/utils';
import { Distributor } from '../../shared/sdk/models';

@Component({
  selector: 'app-distributor-edit',
  templateUrl: './distributor-edit.component.html',
  styleUrls: ['./distributor-edit.component.scss']
})
export class DistributorEditComponent implements OnInit {

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
        }]
    }

  constructor(
    private store: Store<{ distKey: DistributorState }>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  subscriptions: Subscription[];
  distributors: Distributor[];
  activeDistributor: Distributor;
  activeDistributorId: string;

  ngOnInit(): void {
    this.subscribeToRoute();
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToDistributors(),
    ]
  }
  subscribeToDistributors() {
    return this.store.select(state => state.distKey.distributors).subscribe(data => {
      this.distributors = data;
      if (this.distributors?.length) {
        this.activeDistributor = this.distributors.find(distributor => distributor.id === this.activeDistributorId);
        console.log(this.activeDistributorId)
      }
    });
  }
  subscribeToRoute() {
    this.activeDistributorId = this.activatedRoute.snapshot.params.id;
    console.log(this.activatedRoute.snapshot.params)
  }
  formSubmit(distributor) {
    this.store.dispatch(UpdateDistributor({ payload: { id: this.activeDistributorId, updatedDistributor: distributor } }));
    this.router.navigateByUrl('/admin/distributors');
  }
}
