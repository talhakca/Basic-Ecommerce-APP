import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { CompareTableItem } from './compare-table-item.interface';
import { CompareTableLabel } from './compare-table-label.interface';

export interface CompareTable {
  title: HeadingComponentConfig;
  labels: CompareTableLabel[];
  items: CompareTableItem[];
}
