import { IconComponentConfig } from '../icon/icon-component-config.interface';

export interface TimelineItem {
  title?: string;
  subtitle?: string;
  paragraph?: string;
  icon?: IconComponentConfig;
  date?: Date;
}
