import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextBoxSize, TextBoxType } from '../../utils';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderTextboxComponent),
      multi: true,
    },
  ],
})
export class RappiderTextboxComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() type: TextBoxType;
  @Input() mask: string;
  @Input() maskGuide: boolean;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() disabled: boolean;
  @Input() mentionSupported: boolean;
  @Input() mentionPrefix = '#';
  @Input() mentionValues: any;
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() typographySettings: TypographyConfig;
  @Input() size: TextBoxSize;
  @Input() showMaskTyped: boolean;
  @Input() dropSpecialCharacters: boolean;

  @Output() blur = new EventEmitter<string>();
  @Output() focus = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;

  /* Ng zorro mention component */
  valueWith = (data: { value: string }) => data.value;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  ngOnInit(): void {
    this.initDefaults();
  }

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

  onBlur() {
    this.blur.emit(this.value);
  }

  onFocus() {
    this.focus.emit(this.value);
  }

  initDefaults() {
    if (!this.maskGuide) {
      this.maskGuide = false;
    }
    if (!this.type) {
      this.type = TextBoxType.Text;
    }
  }
}
