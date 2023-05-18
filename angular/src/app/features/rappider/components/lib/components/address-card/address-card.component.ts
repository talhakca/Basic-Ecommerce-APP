import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../../utils/address/address.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';

@Component({
  selector: 'rappider-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class RappiderAddressCardComponent {
  @Input() title: HeadingComponentConfig;
  @Input() subtitle: HeadingComponentConfig;
  @Input() addresses: Address[];
  @Input() buttons: ButtonComponentConfig[];

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onClickButton(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
