import { RowFormColumn } from '../row-form';

export interface InlineRowFormComponentConfig {
  orderable?: boolean;
  columns: RowFormColumn[];
  orderNumbersVisibility?: boolean;
}
