import { HeadingComponentConfig } from '..';
import { CategoryListSubItem } from './category-list-subitem.interface';

export interface CategoryList {
  heading: HeadingComponentConfig;
  subItems: CategoryListSubItem[];
}
