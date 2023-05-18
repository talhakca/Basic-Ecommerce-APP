import { ItemPerRow } from '../card-one-list/item-per-row.enum';
import { CardOneComponentConfig } from '../card-one/card-one-component-config.interface';
import { PaginationComponentConfig } from '../pagination/pagination-component-config.interface';
import { SelectComponentConfig } from '../select/select-component-config.interface';
import { TitleToolbarComponentConfig } from '../title-toolbar/title-toolbar-component-config';

export interface CardsConfig {
  items?: CardOneComponentConfig[];
  title?: TitleToolbarComponentConfig;
  itemCountPerRow?: ItemPerRow;
  showTitleOnImage?: boolean;
  showDescriptionOnImage?: boolean;
  selectConfig?: SelectComponentConfig;
  paginationConfig?: PaginationComponentConfig;
}
