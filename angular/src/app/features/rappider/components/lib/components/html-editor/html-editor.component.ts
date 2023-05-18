import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CodeMirrorMode } from '../../utils/codemirror/codemirror-mode.enum';
import { CodeMirrorSettings } from '../../utils/codemirror/codemirror-settings.interface';
import { CodeMirrorTheme } from '../../utils/codemirror/codemirror-theme.enum';
import { RichTextEditorTheme } from '../../utils/rich-text-editor/rich-text-editor-theme.enum';
import { RichTextEditorType } from '../../utils/rich-text-editor/rict-text-editor-type.enum';

@Component({
  selector: 'rappider-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderHtmlEditorComponent),
    },
  ],
})
export class RappiderHtmlEditorComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  RichTextEditorTheme = RichTextEditorTheme;
  RichTextEditorType = RichTextEditorType;

  customHTMLEditModalVisible = false;
  richTextEditorValue: string;
  customHTMLValue: string;

  CODE_MIRROR_SETTINGS: CodeMirrorSettings = {
    mode: CodeMirrorMode.HTML,
    theme: CodeMirrorTheme.Default,
    autoCloseBrackets: true,
    fixedGutter: false,
    autoRefresh: true,
  };

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onCustomHTMLEditModalOpen() {
    this.customHTMLValue = this.value;
    this.customHTMLEditModalVisible = true;
  }

  onCustomHTMLEditModalClose() {
    this.customHTMLEditModalVisible = false;
  }

  onHTMLValueEdit() {
    this.value = this.customHTMLValue;
    this.onCustomHTMLEditModalClose();
    this.onBlur(this.customHTMLValue);
  }

  onValueChange(value: string) {
    this.customHTMLValue = value;
  }

  onBlur(value: string) {
    this.blur.emit(value);
  }
}
