import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }


  getFinalPrice(product) {
    if (product) {
      return product.discountRate ? (product.price * product.discountRate / 100) : product.price;
    }
  }
}

