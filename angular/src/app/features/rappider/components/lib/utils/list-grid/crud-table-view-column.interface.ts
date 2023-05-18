import { CrudViewColumn } from './crud-view-column.interface';

export interface CrudTableViewColumn extends CrudViewColumn {
  title: string;
  sortable?: boolean;
  color?: string;
}
