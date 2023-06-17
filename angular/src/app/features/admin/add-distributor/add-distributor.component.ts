import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CreateDistributor } from '../../data-stores/distributor-data-store/state/distributor-data-store.actions';
import { DistributorState } from '../../data-stores/distributor-data-store/state/distributor-data-store.reducer';
import { FormLayout, CrudViewFormItemType } from '../../rappider/components/lib/utils';
import { Distributor } from '../../shared/sdk/models';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.scss']
})
export class AddDistributorComponent implements OnInit {

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
      ],
    };


  constructor(
    private store: Store<{ distKey: DistributorState }>,
    private router: Router
  ) { }

  distributors: Distributor[];

  ngOnInit(): void {
  }
  formSubmit(distributor) {
    this.store.dispatch(CreateDistributor({ payload: { distributor: { ...distributor, ratingCount: 0 } } }));
    this.router.navigateByUrl('/admin/distributors');
  }

}
