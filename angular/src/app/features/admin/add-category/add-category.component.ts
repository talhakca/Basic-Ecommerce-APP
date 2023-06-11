import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CreateCategory, DeleteCategory } from '../../data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from '../../data-stores/app-data-store/state/app-data-store.reducer';
import { CrudViewColumnType, ActionBehavior, CrudFormSelectItem, CrudViewFormItemType, FormLayout } from '../../rappider/components/lib/utils';
import { Category, Product } from '../../shared/sdk/models';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
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
    private store: Store<{ app: AppState }>,
    private router: Router
  ) { }

  categories: Category[];

  ngOnInit(): void {
  }
  formSubmit(category) {
    this.store.dispatch(CreateCategory({ payload: { category: { ...category, ratingCount: 0 } } }));
    this.router.navigateByUrl('/admin/categories');
  }

}
