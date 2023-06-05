import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private router: Router) { }
  formProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    number: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl('', Validators.required),
    quantityInStocks: new FormControl(0, [Validators.required, Validators.min(0)]),
    price: new FormControl(),
    warrantyStatus: new FormControl(''),
    rating: new FormControl(),
    discountRate: new FormControl(),
    isDeleted: new FormControl(false),
    distributorId: new FormControl(''),
    categoryId: new FormControl('')

  });

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.formProduct.value)
  }
  navigateToAdminPanel() {
    this.router.navigateByUrl('/admin');
  }

}
