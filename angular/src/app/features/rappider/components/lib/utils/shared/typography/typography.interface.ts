import { FontStyle } from './font-style.enum';
import { FontWeight } from './font-weight.enum';
import { TextAlign } from './text-align.enum';
import { TextDecoration } from './text-decoration.enum';
import { TextTransform } from './text-transform.enum';
import { UserSelect } from './user-select.enum';
export interface TypographyConfig {
  fontSize?: string;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textDecoration?: TextDecoration;
  textAlign?: TextAlign;
  textShadow?: string;
  fontFamily?: string;
  fontStretch?: string;
  textIndent?: string;
  letterSpacing?: string;
  lineHeight?: string;
  wordSpacing?: string;
  textTransform?: TextTransform;
  userSelect?: UserSelect;
}
