import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountdownComponentConfig } from '../../utils/countdown/countdown-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-image-timer',
  templateUrl: './image-timer.component.html',
  styleUrls: ['./image-timer.component.scss'],
})
export class RappiderImageTimerComponent {
  /**
   *Displays the title of the image/countdown
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderImageTimerComponent
   */
  @Input() imageTitle: HeadingComponentConfig;
  /**
   *Displays the additional information for the countdown
   *
   * @type {string}
   * @memberof RappiderImageTimerComponent
   */
  @Input() additionalContent: TextComponentConfig;
  /**
   *Displays the image for the countdown
   *
   * @type {ImageComponentConfig}
   * @memberof RappiderImageTimerComponent
   */
  @Input() image: ImageComponentConfig;
  /**
   *Displays the countdown
   *
   * @type {CountdownComponentConfig}
   * @memberof RappiderImageTimerComponent
   */
  @Input() countdown: CountdownComponentConfig;
  /**
   *Emits when countdown finishes
   *
   * @memberof RappiderImageTimerComponent
   */
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter<CountdownComponentConfig>();

  onCountdownFinish(countdown: CountdownComponentConfig) {
    this.click.emit(countdown);
  }
}
