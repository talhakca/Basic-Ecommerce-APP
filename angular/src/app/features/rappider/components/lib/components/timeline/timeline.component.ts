import { Component, Input, OnInit } from '@angular/core';
import { TimelineItem } from '../../utils/timeline/timeline-item.interface';

@Component({
  selector: 'rappider-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class RappiderTimelineComponent {
  @Input() items: TimelineItem[] = [];
}
