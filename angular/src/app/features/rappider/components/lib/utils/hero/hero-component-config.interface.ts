import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ImageComponentConfig } from '../image';
import { TextComponentConfig } from '../text/text-component-config.interface';
import { HeroHorizontalContentPlacement } from './hero-horizontal-content-placement.enum';
import { HeroVerticalContentPlacement } from './hero-vertical-content-placement.enum';

export interface HeroComponentConfig {
  backgroundImage: ImageComponentConfig;
  lineBackgroundColor?: string;
  lineWidth?: string;
  content?: TextComponentConfig;
  title?: HeadingComponentConfig;
  button?: ButtonComponentConfig;
  horizontalContentPlacement?: HeroHorizontalContentPlacement;
  verticalContentPlacement?: HeroVerticalContentPlacement;
}
