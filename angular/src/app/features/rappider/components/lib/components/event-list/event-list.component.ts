import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { EventListItem } from '../../utils/event-list/event-list-item.interface';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class RappiderEventListComponent {
  /* data to emit */
  @Input() data: any;
  /* title,subtitle,color,backgroundcolor,description,date */
  @Input() items: EventListItem[];
  /* card's title */
  @Input() cardTitle: HeadingComponentConfig;
  /* card's button */
  @Input() button: ButtonComponentConfig;

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }
}
