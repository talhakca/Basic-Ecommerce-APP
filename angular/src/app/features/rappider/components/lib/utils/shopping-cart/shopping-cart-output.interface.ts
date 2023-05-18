import { ShoppingCartItem } from './shopping-cart-item.interface';

export interface ShoppingCartValueChangeOutput {
  item: ShoppingCartItem;
  count: number;
}
