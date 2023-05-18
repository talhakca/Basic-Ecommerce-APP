import { Component, Input } from '@angular/core';
import { IconComponentConfig } from '../../utils/icon';

@Component({
  selector: 'rappider-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class RappiderStatisticComponent {
  /* statistic title */
  @Input() title: string;
  /* Target time in timestamp form */
  @Input() value: string | number;
  /* prefix icon */
  @Input() icon: IconComponentConfig;
  /* suffix of value */
  @Input() suffix: string;
}
