import { HeadingComponentConfig } from '../heading';
import { LinkFooterSubItem } from './link-footer-subitem.interface';

export interface LinkFooterItem {
  heading: HeadingComponentConfig;
  subItems: LinkFooterSubItem[];
}
