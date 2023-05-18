import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';

@Component({
  selector: 'rappider-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss'],
})
export class RappiderLinkListComponent {
  @Input() buttons: ButtonComponentConfig[];

  @Output() itemClick = new EventEmitter<ButtonComponentConfig>();

  onItemClick(button: ButtonComponentConfig) {
    this.itemClick.emit(button);
  }
}
