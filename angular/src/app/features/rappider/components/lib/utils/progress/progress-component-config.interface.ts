import { ColorConfig } from '../shared/color/color.interface';
import { SizeConfig } from '../shared/size/size.interface';
import { SpacingConfig } from '../shared/spacing/spacing.interface';
import { ProgressSize } from './progress-size.enum';
import { ProgressStatus } from './progress-status.enum';
import { ProgressType } from './progress-type.enum';

export interface ProgressComponentConfig {
  percent: number;
  status: ProgressStatus;
  type: ProgressType;
  showInfo?: boolean;
  size?: ProgressSize;
  successPercent?: number;
  width?: number;
  strokeWidth?: number;
  isSuccessPercentVisible?: boolean;
  customSizeSettings?: SizeConfig;
  customColorSettings?: ColorConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
}
