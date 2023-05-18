import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { DividerComponentConfig } from '../../utils/divider';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-delivered-product-detail',
  templateUrl: './delivered-product-detail.component.html',
  styleUrls: ['./delivered-product-detail.component.scss'],
})
export class RappiderDeliveredProductDetailComponent {
  /* data to emit */
  @Input() data: any;
  @Input() image: ImageComponentConfig;
  @Input() product: TextComponentConfig;
  @Input() detail: TextComponentConfig;
  @Input() deliveryTime: TextComponentConfig;
  @Input() addresses: TextComponentConfig[];
  @Input() deliveryRate: TextComponentConfig;
  @Input() rate: number;
  @Input() button: ButtonComponentConfig;
  @Input() help: TextComponentConfig;
  @Input() supports: TextComponentConfig[];
  @Input() info: TextComponentConfig;
  @Input() orderDetails: TextComponentConfig[];
  @Input() orderDate: TextComponentConfig;
  @Input() divider: DividerComponentConfig;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }
}
