import { ColorConfig, TypographyConfig } from '../shared';
import { HeadingType } from './heading-type.enum';

export interface HeadingComponentConfig {
  type?: HeadingType;
  content?: string;
  typography?: TypographyConfig;
  colorSettings?: ColorConfig;
}
