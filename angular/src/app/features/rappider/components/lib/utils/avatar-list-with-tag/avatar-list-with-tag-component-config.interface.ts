import { Tag } from '../tag/tag.interface';
import { TextComponentConfig } from '../text/text-component-config.interface';

export interface AvatarListWithTagComponentConfig {
  avatarUrl: string;
  title: TextComponentConfig;
  subtitle: TextComponentConfig;
  itemTag: Tag;
}
