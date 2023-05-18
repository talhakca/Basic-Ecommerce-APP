import { IconComponentConfig } from '../icon';
import { TextComponentConfig } from '../text';
import { TagType } from './tag-type.enum';

export interface TagComponentConfig {
  mode?: TagType;
  checked?: boolean;
  color?: string;
  text?: TextComponentConfig;
  icon?: IconComponentConfig;
}
