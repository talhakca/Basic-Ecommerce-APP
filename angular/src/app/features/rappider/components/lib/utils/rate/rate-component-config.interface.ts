import { BorderConfig } from '../shared/border/border.interface';
import { BoxShadowConfig } from '../shared/box-shadow/box-shadow.interface';
import { ColorConfig } from '../shared/color/color.interface';
import { SizeConfig } from '../shared/size/size.interface';
import { SpacingConfig } from '../shared/spacing/spacing.interface';

export interface RateConfig {
  allowClear?: boolean;
  allowHalf?: boolean;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  borderSettings?: BorderConfig;
  customSizeSettings?: SizeConfig;
  customColorSettings?: ColorConfig;
  shadowSettings?: BoxShadowConfig;
  paddingSettings?: SpacingConfig;
  marginSettings?: SpacingConfig;
}
