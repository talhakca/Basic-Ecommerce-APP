import { ButtonComponentConfig } from '../button';
import { RowFormColumn } from './row-form-column.interface';

export interface RowFormConfig {
  orderable?: boolean /* allow to drag drop row item in order to order the item */;
  addButtonVisible?: boolean;
  addButton?: ButtonComponentConfig;
  columns: RowFormColumn[];
  hasInitialEmptyRow: boolean;
  submitButtonText?: string;
}
