import { SpacingConfig } from '../shared';
import { TextComponentConfig } from '../text/text-component-config.interface';
import { BadgeStatus } from './badge-status.enum';

export interface Badge {
  status?: BadgeStatus;
  title: string;
  text?: TextComponentConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
  count?: number;
  color?: string;
  dot?: boolean;
  showDot?: boolean;
  overflowCount?: number;
  showZero?: boolean;
  offset?: [number, number];
}
