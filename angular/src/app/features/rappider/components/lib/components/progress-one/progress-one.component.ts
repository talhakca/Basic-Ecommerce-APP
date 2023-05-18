import { Component, Input } from '@angular/core';
import {
  HeadingComponentConfig,
  ProgressStatus,
  ProgressType,
  TextComponentConfig,
} from '../../utils';

@Component({
  selector: 'rappider-progress-one',
  templateUrl: './progress-one.component.html',
  styleUrls: ['./progress-one.component.scss'],
})
export class RappiderProgressOneComponent {
  /**
   *Component's title
   *
   * @type {number}
   * @memberof RappiderProgressOneComponent
   */
  @Input() title: HeadingComponentConfig;
  /**
   *Displays the completion percentage
   *
   * @type {number}
   * @memberof RappiderProgressOneComponent
   */
  @Input() percent: number;
  /**
   * Whether to display the progress value and the status icon or not
   *
   * @type {boolean}
   * @memberof RappiderProgressOneComponent
   */
  @Input() showBadge: boolean;
  /**
   *Progress bar's  status type
   *
   * @type {ProgressStatus}
   * @memberof RappiderProgressOneComponent
   */
  @Input() status: ProgressStatus;
  /**
   *Display's the percentage info inside the progress bar
   *
   * @type {string}
   * @memberof RappiderProgressOneComponent
   */
  @Input() innerContentFormat: string;
  /**
   *Adjusts the stroke width of the progress bar
   *
   * @type {number}
   * @memberof RappiderProgressOneComponent
   */
  @Input() strokeWidth: number;
  /**
   *Adjusts the badge's color
   *
   * @type {string}
   * @memberof RappiderProgressOneComponent
   */
  @Input() badgeColor: string;
  /**
   *Progress bar's width
   *
   * @type {number}
   * @memberof RappiderProgressOneComponent
   */
  @Input() width: number;
  /**
   *Badge's percentage
   *
   * @type {number}
   * @memberof RappiderProgressOneComponent
   */
  @Input() showPercentInBadge: number;
  /**
   *Additional text for badge
   *
   * @type {string}
   * @memberof RappiderProgressOneComponent
   */
  @Input() badgeContent1: TextComponentConfig;
  /**
   *Badge's text
   *
   * @type {string}
   * @memberof RappiderProgressOneComponent
   */
  @Input() badgeContent2: TextComponentConfig;
  /**
   *Progress bar's type
   *
   * @type {ProgressType}
   * @memberof RappiderProgressOneComponent
   */
  @Input() type: ProgressType;
}
