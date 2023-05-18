import { FontPickerType } from '../font-picker/font-picker-select-type.enum';

export interface FontCardItem {
  fontFamily: string;
  fontSize: string;
  textType: FontPickerType;
  customText: string;
  sentenceText: string;
  paragraphText: string;
}
