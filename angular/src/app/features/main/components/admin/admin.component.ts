import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToAddProduct() {
    this.router.navigateByUrl('/admin/addproduct');
  }
  navigateToDeleteProduct() {
    this.router.navigateByUrl('/admin/deleteproduct');
  }
  navigateToUpdateProduct() {
    this.router.navigateByUrl('/admin/updateproduct');
  }


}
