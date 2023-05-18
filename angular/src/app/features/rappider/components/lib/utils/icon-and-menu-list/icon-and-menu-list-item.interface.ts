import { DropdownMenuComponentConfig } from '../dropdown-menu/dropdown-menu.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { IconComponentConfig } from '../icon/icon-component-config.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface IconAndMenuListItem {
  title?: HeadingComponentConfig;
  description?: TextComponentConfig;
  icon?: IconComponentConfig;
  dropdownMenu?: DropdownMenuComponentConfig;
}
