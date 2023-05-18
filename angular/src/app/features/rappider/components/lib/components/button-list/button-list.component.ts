import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonListDirection } from '../../utils/button-list/button-list-direction.enum';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';

@Component({
  selector: 'rappider-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss'],
})
export class RappiderButtonListComponent {
  @Input() buttons: ButtonComponentConfig[];
  /* sorting direction, horizontal or vertical */
  @Input() direction: ButtonListDirection;
  /* space between buttons */
  @Input() gap: string;

  Direction = ButtonListDirection;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
