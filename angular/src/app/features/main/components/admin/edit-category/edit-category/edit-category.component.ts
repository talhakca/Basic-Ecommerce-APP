import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CreateCategory, DeleteCategory, InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { Category } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  formCategory: FormGroup;
  categories$: Category[] = [];
  private categoriesSub: Subscription = new Subscription();

  constructor(private router: Router, private store: Store<any>) {
    this.formCategory = new FormGroup({
      name: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.categoriesSub = this.store.select(state => state.app.categories).subscribe(data => {
      this.categories$ = data;
    })
  }

  ngOnDestroy(): void {
    this.categoriesSub.unsubscribe();
  }

  navigateToAdminPanel(): void {
    this.router.navigateByUrl('/admin');
  }

  onSubmit(): void {
    const newCategory = {
      category: { name: this.formCategory.value.name }
    };
    this.store.dispatch(CreateCategory({ payload: newCategory }));
    this.formCategory.reset();
  }

  onDelete(categoryId: string): void {
    this.store.dispatch(DeleteCategory({ payload: categoryId }));
  }
}
