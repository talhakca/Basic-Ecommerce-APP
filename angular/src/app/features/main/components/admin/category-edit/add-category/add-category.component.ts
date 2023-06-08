import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class AddCategoryComponent implements OnInit, OnDestroy {
  categoriesSub: NewCategory[] = [];
  private subscription: Subscription[] = [];
  category: Category[] = [];
  displayedCategory: Category[] = [];
  formCategory: FormGroup;
  isEditing: string = null;
  editingName: string = '';

  constructor(private router: Router, private store: Store<any>) {
    this.formCategory = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.subscribeToCategories();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  private subscribeToCategories(): void {
    this.subscription.push(
      this.store.select(state => state.newCategories).subscribe(data => {
        this.categoriesSub = data;
      }),
      this.store.select(state => state.app.categories).subscribe(categories => {
        this.category = categories;
        this.displayedCategory = [...this.category];
      })
    );
  }

  navigateToAdminPanel(): void {
    this.router.navigateByUrl('/admin');
  }

  onSubmit(): void {
    if (!this.formCategory.valid) return;

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

  deleteCategory(categoryId: string): void {
    this.store.dispatch(DeleteCategory({ payload: categoryId }));
  }

  editCategory(id: string, name: string): void {
    if (this.isEditing) return;
    this.isEditing = id;
    this.editingName = name;
  }

  updateCategory(id: string): void {
    if (!id || !this.editingName) {
      console.error('Invalid id or name:', id, this.editingName);
      return;
    }

    const updatedData: NewCategory = {
      name: this.editingName
    };

    this.store.dispatch(UpdateCategory({ payload: { id, updatedData } }));
    const index = this.displayedCategory.findIndex(category => category.id === id);
    if (index !== -1) {
      this.displayedCategory[index] = { ...this.displayedCategory[index], name: this.editingName };
    }
    this.isEditing = null;
    this.editingName = '';
  }
}