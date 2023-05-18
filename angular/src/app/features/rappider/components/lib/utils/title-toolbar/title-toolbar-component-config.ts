import { BreadcrumbOption, HeadingComponentConfig } from '..';

export interface TitleToolbarComponentConfig {
  mainTitle: HeadingComponentConfig;
  options?: BreadcrumbOption[] | string[] | string;
}
