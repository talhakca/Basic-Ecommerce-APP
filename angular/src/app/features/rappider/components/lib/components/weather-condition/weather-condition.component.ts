import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { DividerComponentConfig } from '../../utils/divider';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { SliderComponentConfig } from '../../utils/slider/slider-component-config.interface';
import { WeatherConditionContent } from '../../utils/weather-condition/weather-condition-content.interface';

@Component({
  selector: 'rappider-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.scss'],
})
export class RappiderWeatherConditionComponent {
  /**
   * Title
   *
   * @type {HeadingComponentConfig}
   * @memberof WeatherConditionComponent
   */
  @Input() title: HeadingComponentConfig;
  /**
   * Sub title
   *
   * @type {HeadingComponentConfig}
   * @memberof WeatherConditionComponent
   */
  @Input() subtitle: HeadingComponentConfig;
  /**
   * Information text
   *
   * @type {HeadingComponentConfig}
   * @memberof WeatherConditionComponent
   */
  @Input() informationText: HeadingComponentConfig;
  /**
   * Image
   *
   * @type {ImageComponentConfig}
   * @memberof WeatherConditionComponent
   */
  @Input() image: ImageComponentConfig;
  /**
   * Top Additional contents
   *
   * @type {WeatherConditionContent[]}
   * @memberof WeatherConditionComponent
   */
  @Input() topAdditionalContents: WeatherConditionContent[];
  /**
   * Bottom Additional contents
   *
   * @type {WeatherConditionContent[]}
   * @memberof WeatherConditionComponent
   */
  @Input() bottomAdditionalContents: WeatherConditionContent[];
  /**
   * Button
   *
   * @type {ButtonComponentConfig}
   * @memberof WeatherConditionComponent
   */
  @Input() button: ButtonComponentConfig;
  /**
   * Slider options
   *
   * @type {SliderComponentConfig}
   * @memberof WeatherConditionComponent
   */
  @Input() slider: SliderComponentConfig;

  /**
   *  Emits selected slider option value.
   *
   * @memberof WeatherConditionComponent
   */
  @Input() divider: DividerComponentConfig;

  @Output() sliderValueChange = new EventEmitter<number>();

  onSliderValueChange(event: number) {
    this.sliderValueChange.emit(event);
  }
}
