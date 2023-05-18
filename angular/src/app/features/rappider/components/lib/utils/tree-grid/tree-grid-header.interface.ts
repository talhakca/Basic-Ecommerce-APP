import { TreeGridColumnType } from './tree-grid-column-type.enum';

export interface TreeGridHeader {
  fieldName: string;
  title: string;
  index: number;
  type: TreeGridColumnType;
}
