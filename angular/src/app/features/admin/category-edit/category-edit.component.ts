import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UpdateCategory } from '../../data-stores/category-data-store/state/category-data-store.actions';
import { CategoryState } from '../../data-stores/category-data-store/state/category-data-store.reducer';
import { FormLayout, CrudViewFormItemType } from '../../rappider/components/lib/utils';
import { Category } from '../../shared/sdk/models';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

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
    private store: Store<{ categoryKey: CategoryState }>,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  subscriptions: Subscription[];
  categories: Category[];
  activeCategory: Category;
  activeCategoryId: string;
  isLoading: boolean;

  ngOnInit(): void {
    this.subscribeToRoute();
    this.subscribeToData()
  }
  subscribeToData() {
    this.subscriptions = [
      this.subscribeToCategories(),
      this.subscribeToCategoriesLoading()
    ]
  }
  subscribeToCategories() {
    return this.store.select(state => state.categoryKey.categories).subscribe(data => {
      this.categories = data;
      if (this.categories?.length) {
        this.activeCategory = this.categories.find(category => category.id === this.activeCategoryId);
        console.log(this.activeCategoryId)
      }
    });
  }
  subscribeToCategoriesLoading(): Subscription {
    return this.store
      .select((state) => state.categoryKey.isLoading)
      .subscribe((isLoading) => {
        this.isLoading = isLoading;
      });
  }
  subscribeToRoute() {
    this.activeCategoryId = this.activatedRoute.snapshot.params.id;
    console.log(this.activatedRoute.snapshot.params)
  }
  formSubmit(category) {
    this.store.dispatch(UpdateCategory({ payload: { id: this.activeCategoryId, updatedCategory: category } }));
    this.router.navigateByUrl('/admin/categories');
  }

}
