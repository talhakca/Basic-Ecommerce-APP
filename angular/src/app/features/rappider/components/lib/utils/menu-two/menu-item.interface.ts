import { IconComponentConfig } from '../icon';
import { TagComponentConfig } from '../tag';
import { MenuActionBehavior } from './menu-action-behavior.enum';

export interface MenuItem {
  key: string;
  title: string;
  icon?: IconComponentConfig;
  tag?: TagComponentConfig;
  actionBehavior: MenuActionBehavior;
  redirectUrl?: string;
  queryParams?: any;
  children?: MenuItem[];
}
