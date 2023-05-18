import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  HeadingComponentConfig,
  ShoppingCartItem,
  ShoppingCartValueChangeOutput,
} from '../../utils';

@Component({
  selector: 'rappider-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class RappiderShoppingCartComponent {
  /* shopping cart inputs */
  @Input() items: ShoppingCartItem[];
  /* headings of shopping cart */
  @Input() headings: HeadingComponentConfig[];

  @Output() countChange = new EventEmitter<ShoppingCartValueChangeOutput>();

  onCountChange(item: ShoppingCartItem, count: number) {
    this.countChange.emit({
      item,
      count,
    });
  }
}
