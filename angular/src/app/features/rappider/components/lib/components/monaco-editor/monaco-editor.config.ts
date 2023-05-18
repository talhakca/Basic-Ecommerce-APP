import { InjectionToken } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const MONACO_EDITOR_CONFIG = new InjectionToken('MONACO_EDITOR_CONFIG');

export interface MonacoEditorConfig {
  baseUrl?: string;
  defaultOptions?: { [key: string]: any };
  // eslint-disable-next-line @typescript-eslint/ban-types
  onMonacoLoad?: Function;
}
