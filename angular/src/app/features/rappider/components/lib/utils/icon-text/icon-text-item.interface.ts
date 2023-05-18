import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';
import { IconTextActionBehavior } from './icon-text-action-behavior';

export interface IconTextItem {
  icon: IconComponentConfig;
  text: TextComponentConfig;
  redirectrUrl: string;
  routeBehavior: IconTextActionBehavior;
}
