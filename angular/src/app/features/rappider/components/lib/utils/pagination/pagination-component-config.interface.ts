import { PaginationSize } from '../';

export interface PaginationComponentConfig {
  pageIndex?: number;
  total?: number;
  disabled?: boolean;
  size?: PaginationSize;
  pageSize?: number;
  isSimple?: boolean;
  color?: string;
  gap?: string;
  showTotal?: string;
  showPagination?: boolean;
}
