export interface SidenavMenu {
  text?: string;
  icon?: string;
  route?: string;
  children?: SidenavMenu[];
  isExpanded?: boolean;
}
