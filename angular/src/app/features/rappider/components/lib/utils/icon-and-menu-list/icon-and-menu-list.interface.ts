import { ActionBehavior } from '../action-utils/action-behavior.enum';
import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { IconAndMenuListItem } from './icon-and-menu-list-item.interface';

export interface IconAndMenuList {
  items?: IconAndMenuListItem[];
  title?: string;
  button?: ButtonComponentConfig;
  buttonActionBehavior?: ActionBehavior;
  buttonRedirectUrl?: string;
}
