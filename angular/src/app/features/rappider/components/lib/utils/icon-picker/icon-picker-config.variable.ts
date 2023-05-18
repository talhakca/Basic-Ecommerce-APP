import { IconType } from '../icon/icon-type.enum';
import { FONT_AWESOME_ICONS } from './font-awesome-icons.variable';
import { IconPickerConfig } from './icon-picker-config.interface';
import { NG_ZORRO_ICONS } from './ng-zorro-icons.variable';

export const ICON_PICKER_CONFIG: IconPickerConfig = {
  sections: [
    {
      iconType: IconType.NgZorro,
      items: NG_ZORRO_ICONS,
    },
    {
      iconType: IconType.FontAwesome,
      items: FONT_AWESOME_ICONS,
    },
  ],
};
