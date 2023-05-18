import { CompareTableHeader } from './compare-table-header.interface';
import { CompareTableItemContent } from './compare-table-item-content.interface';

export interface CompareTableItem {
  header: CompareTableHeader;
  contents: CompareTableItemContent[];
}
