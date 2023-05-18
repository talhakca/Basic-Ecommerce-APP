import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { CartItemAdditionalContent } from '../../utils/cart-item/cart-item-additional-content.interface';
import { CartItem } from '../../utils/cart-item/cart-item.interface';
import { DividerComponentConfig } from '../../utils/divider/divider-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class RappiderCartItemComponent {
  @Input() image: ImageComponentConfig;
  @Input() divider: DividerComponentConfig;
  @Input() item: CartItem;
  @Input() additionalItems: CartItemAdditionalContent[];
  @Input() additionalItemsTitle: HeadingComponentConfig;
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() typographySettings: TypographyConfig;
  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
