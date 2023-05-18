import { IconTextColumnCount } from './icon-text-column-count.enum';
import { IconTextContentMode } from './icon-text-content-mode.enum';
import { IconTextItem } from './icon-text-item.interface';
import { IconTextListMode } from './icon-text-list-mode.enum';

export interface IconTextComponentConfig {
  items: IconTextItem[];
  iconTextListMode: IconTextListMode;
  iconTextContentMode: IconTextContentMode;
  iconTextColumnCount: IconTextColumnCount;
}
