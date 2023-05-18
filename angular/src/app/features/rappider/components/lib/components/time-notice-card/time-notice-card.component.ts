import { Component, Input } from '@angular/core';
import { TextComponentConfig } from '../../utils/text';
import { TimeNoticeCardColor } from '../../utils/time-notice-card';

@Component({
  selector: 'rappider-time-notice-card',
  templateUrl: './time-notice-card.component.html',
  styleUrls: ['./time-notice-card.component.scss'],
})
export class RappiderTimeNoticeCardComponent {
  @Input() startTime: string = new Date().toDateString();
  @Input() startTimeText: TextComponentConfig;
  @Input() startTimeClock: TextComponentConfig;
  @Input() endTime: string = new Date().toDateString();
  @Input() endTimeText: TextComponentConfig;
  @Input() endTimeClock: TextComponentConfig;
  @Input() color: TimeNoticeCardColor;
}
