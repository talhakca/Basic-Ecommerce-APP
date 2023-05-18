import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { TimelineItem } from '../../utils/timeline/timeline-item.interface';

@Component({
  selector: 'rappider-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss'],
})
export class RappiderTimelineCardComponent {
  @Input() items: TimelineItem[];
  @Input() title: string;
  @Input() button: ButtonComponentConfig;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
