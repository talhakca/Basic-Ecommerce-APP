import { RichTextEditorTheme } from './rich-text-editor-theme.enum';
import { RichTextEditorType } from './rict-text-editor-type.enum';

export interface RichTextEditorComponentConfig {
  editorType?: RichTextEditorType;
  theme?: RichTextEditorTheme;
  placeholder?: string;
  cssStyle?: { [key: string]: any };
  cssClass?: string;
  mentionSupported?: false;
  mentionValues?: string[];
}
