import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CreateProduct, DeleteProduct, GetProducts, InitApp, UpdateProduct } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { Category, Product } from 'src/app/features/shared/sdk/models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  formProduct: FormGroup;
  products$: Product[] = [];
  private productsSub: Subscription = new Subscription();
  editMode = false;
  editingProduct: Product | null = null;
  editForm: FormGroup;
  categories$: Category[] = [];
  private categoriesSub: Subscription = new Subscription();
  addFormCard = false;



  constructor(private store: Store<any>, private router: Router) {
    this.formProduct = new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      number: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl('', Validators.required),
      quantityInStocks: new FormControl(0, [Validators.required, Validators.min(0)]),
      price: new FormControl(0),
      warrantyStatus: new FormControl(''),
      rating: new FormControl(0),
      discountRate: new FormControl(0),
      isDeleted: new FormControl(true),
      // distributorId: new FormControl(''),
      categoryId: new FormControl('')
    });
    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      number: new FormControl(''),
      description: new FormControl(''),
      imageUrl: new FormControl('', Validators.required),
      quantityInStocks: new FormControl(0, [Validators.required, Validators.min(0)]),
      price: new FormControl(0),
      warrantyStatus: new FormControl(''),
      rating: new FormControl(0),
      discountRate: new FormControl(0),
      isDeleted: new FormControl(true),
      // distributorId: new FormControl(''),
      categoryId: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.store.dispatch(GetProducts())
    this.productsSub = this.store.select(state => state.app.products).subscribe(data => {
      this.products$ = data;
    })
    this.store.dispatch(InitApp());
    this.categoriesSub = this.store.select(state => state.app.categories).subscribe(data => {
      this.categories$ = data;
    })
  }

  ngOnDestroy(): void {
    this.productsSub.unsubscribe();
    this.categoriesSub.unsubscribe();
  }

  navigateToAdminPanel(): void {
    this.router.navigateByUrl('/admin');
  }

  onSubmit(): void {
    const newProduct = {
      product: { ...this.formProduct.value }
    };
    this.store.dispatch(CreateProduct({ payload: newProduct }));
    this.formProduct.reset();
  }
  onDelete(productId: string): void {
    this.store.dispatch(DeleteProduct({ payload: { deletedProductId: productId } }));
  }
  onEdit(product: Product): void {
    this.editMode = true;
    this.editingProduct = product;
    this.editForm.patchValue(product);
    console.log(this.editingProduct)
  }
  onEditSubmit(): void {
    if (this.editingProduct) {
      const updatedProduct = this.editForm.getRawValue();
      this.store.dispatch(UpdateProduct({ payload: { id: this.editingProduct.id, updatedProduct: updatedProduct } }));
    }
    this.editMode = false;
    this.editForm.reset();
    console.log()
  }
  addProductCardOpen() {
    this.addFormCard = true;
    this.editMode = false;
  }
  addProductCardClose() {
    this.addFormCard = false;
    this.editMode = false;
  }
}
