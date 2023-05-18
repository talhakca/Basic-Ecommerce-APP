import {
  ButtonComponentConfig,
  HeadingComponentConfig,
  RichTextEditorComponentConfig,
  Tag,
} from '..';

export interface NoteComponentConfig {
  data?: any;
  tag?: Tag;
  title?: HeadingComponentConfig;
  subtitle?: HeadingComponentConfig;
  saveButton?: ButtonComponentConfig;
  cancelButton?: ButtonComponentConfig;
  additionalButtons?: ButtonComponentConfig[];
  richTextEditor?: RichTextEditorComponentConfig;
  richTextEditorVisibility?: boolean;
  content?: string;
}
