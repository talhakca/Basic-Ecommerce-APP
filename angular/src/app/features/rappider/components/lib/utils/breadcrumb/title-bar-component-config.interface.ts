import { ButtonComponentConfig } from '../button';
import { DropdownMenuComponentConfig } from '../dropdown-menu';
import { HeadingComponentConfig } from '../heading';
import { IconComponentConfig } from '../icon';
import { BreadcrumbOption } from './breadcrumb-option.interface';

export interface TitleBarComponentConfig {
  options?: BreadcrumbOption[];
  cssStyle?: any;
  dropdownMenu?: DropdownMenuComponentConfig;
  actionIcon?: IconComponentConfig;
  mainTitle?: HeadingComponentConfig;
  actionButtons?: ButtonComponentConfig[];
}
