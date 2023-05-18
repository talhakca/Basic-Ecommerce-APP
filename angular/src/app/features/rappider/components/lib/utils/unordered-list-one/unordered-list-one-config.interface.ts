import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { IconComponentConfig } from '../icon/icon-component-config.interface';

export interface UnorderedListOneConfig {
  titleIcon?: IconComponentConfig;
  title?: HeadingComponentConfig;
  list: string[];
}
