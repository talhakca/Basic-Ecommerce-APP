import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-card-ten',
  templateUrl: './card-ten.component.html',
  styleUrls: ['./card-ten.component.scss'],
})
export class RappiderCardTenComponent {
  /* data to emit */
  @Input() data: any;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* subtitle */
  @Input() subtitle: HeadingComponentConfig;
  /* additional content */
  @Input() additionalContent: TextComponentConfig;
  /* button */
  @Input() button: ButtonComponentConfig;

  /* button click emit */
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
