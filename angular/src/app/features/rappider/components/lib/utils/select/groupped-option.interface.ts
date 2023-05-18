import { TemplateRef } from '@angular/core';

export interface GrouppedOption {
  label: string | number | TemplateRef<any>;
  value: any;
  disabled?: boolean;
  hide?: boolean;
  groupLabel?: string | TemplateRef<any>;
}
