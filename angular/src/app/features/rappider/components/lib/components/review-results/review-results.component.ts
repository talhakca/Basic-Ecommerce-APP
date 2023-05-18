import { Component, Input, OnInit } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ProgressComponentConfig } from '../../utils/progress/progress-component-config.interface';

@Component({
  selector: 'rappider-review-results',
  templateUrl: './review-results.component.html',
  styleUrls: ['./review-results.component.scss'],
})
export class RappiderReviewResultsComponent {
  /* heading config */
  @Input() title: HeadingComponentConfig;
  /* progress bars */
  @Input() progresses: ProgressComponentConfig[];
  /* progress rate */
  @Input() rate: number;
}
