import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductOneComponentConfig } from '../../utils';

@Component({
  selector: 'rappider-product-one-list',
  templateUrl: './product-one-list.component.html',
  styleUrls: ['./product-one-list.component.scss'],
})
export class RappiderProductOneListComponent {
  @Input() products: ProductOneComponentConfig[];

  @Output() productClick = new EventEmitter<ProductOneComponentConfig>();

  onProductClick(product: ProductOneComponentConfig) {
    this.productClick.emit(product);
  }
}
