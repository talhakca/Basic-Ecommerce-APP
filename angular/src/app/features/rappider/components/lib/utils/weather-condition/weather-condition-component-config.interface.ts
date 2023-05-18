import { NzMarks } from 'ng-zorro-antd/slider';
import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';
import { WeatherConditionContent } from './weather-condition-content.interface';

export interface WeatherCondition {
  title?: HeadingComponentConfig;
  subtitle?: HeadingComponentConfig;
  informationText?: HeadingComponentConfig;
  image?: ImageComponentConfig;
  bottomAddinationalContents?: WeatherConditionContent[];
  topAddinationalContents?: WeatherConditionContent[];
  button?: ButtonComponentConfig;
  sliderOptions?: NzMarks;
  sliderMax?: number;
  sliderMin?: number;
  selectedSliderOption?: number;
}
