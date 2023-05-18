import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { CartItemComponentConfig } from '../../utils/cart-item/cart-item-component-config';
import { DropdownMenuPlacement } from '../../utils/dropdown-menu/dropdown-menu-placement.enum';
import { DropdownMenuTriggerType } from '../../utils/dropdown-menu/dropdown-menu-trigger-type.enum';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss'],
})
export class RappiderCartPreviewComponent {
  /**
   *Cart's items
   *
   * @type {CartItemComponentConfig[]}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() cartItem: CartItemComponentConfig[];
  /**
   *Cart's footer
   *
   * @type {string}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() footer: TextComponentConfig;
  /**
   *Footer content
   *
   * @type {string}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() footerContent: TextComponentConfig;
  /**
   *Cart's buttons
   *
   * @type {ButtonComponentConfig[]}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() buttons: ButtonComponentConfig[];
  /**
   *Dropdown's button
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() dropdownButton: ButtonComponentConfig;
  /**
   *Placement of dropdown
   *
   * @type {DropdownMenuPlacement}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() placement: DropdownMenuPlacement;
  /**
   *Trigger type of dropdown
   *
   * @type {DropdownMenuTriggerType}
   * @memberof RappiderCartPreviewComponent
   */
  @Input() triggerType: DropdownMenuTriggerType;

  /**
   *Dropdown click emit
   *
   * @memberof RappiderCartPreviewComponent
   */
  @Output() dropdownButtonClick = new EventEmitter<ButtonComponentConfig>();
  /**
   *Button click emit
   *
   * @memberof RappiderCartPreviewComponent
   */
  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();
  /**
   *Cart items click emit
   *
   * @memberof RappiderCartPreviewComponent
   */
  @Output() cartItemButtonClick = new EventEmitter<ButtonComponentConfig>();

  onDropdownButtonClick(dropdownButton: ButtonComponentConfig) {
    this.buttonClick.emit(dropdownButton);
  }

  onCartItemButtonClick(cartItem: ButtonComponentConfig) {
    this.buttonClick.emit(cartItem);
  }

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
