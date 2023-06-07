import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AddCategory, DeleteCategory, UpdateCategory } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { Category, NewCategory } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoriesSub: NewCategory[] = [];
  private subscription: Subscription[] = [];
  category: Category[];
  displayedCategory: Category[] = [];

  private categorySubscription: Subscription;

  private getSubscriptions(): Subscription[] {
    return [
      this.store.select(state => state.newCategories).subscribe(data => {
        this.categoriesSub = data;
      }),
      this.store.select(state => state.app.categories).subscribe(categories => {
        this.category = categories;
        this.displayedCategory = [...this.category];
      })
    ];
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

  constructor(private router: Router, private store: Store<any>) { }
  formCategory = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.categoriesSub;
    this.subscription = this.getSubscriptions();

  }

  navigateToAdminPanel() {
    this.router.navigateByUrl('/admin');
  }
  onSubmit() {
    const newCategory: NewCategory = {
      name: this.formCategory.value.name
    };
    this.store.dispatch(AddCategory({ payload: newCategory }));

    const updatedDisplayedCategory: Category = {
      name: newCategory.name,
      id: ''
    };
    this.displayedCategory.push(updatedDisplayedCategory);
    this.formCategory.reset();
  }
  deleteCategory(categoryId: string) {
    this.store.dispatch(DeleteCategory({ payload: categoryId }));
  }
  isEditing: string = null;
  editingName: string = '';

  editCategory(id: string, name: string) {
    this.isEditing = id;
    this.editingName = name;
  }

  updateCategory(id: string) {
    const updatedData: NewCategory = {
      name: this.editingName
    };
    this.store.dispatch(UpdateCategory({ payload: { id, updatedData } }));
    this.isEditing = null;

  }
}
