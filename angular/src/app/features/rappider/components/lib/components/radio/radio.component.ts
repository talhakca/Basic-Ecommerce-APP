import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectableOption, TextComponentConfig } from '../../utils';
import { BoxShadowConfig, SpacingConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderRadioComponent),
      multi: true,
    },
  ],
})
export class RappiderRadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: SelectableOption[];
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() invalidConfigText: TextComponentConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() shadowSettings: BoxShadowConfig;
  @Input() color: string;
  @Input() width: string;
  @Input() height: string;
  @Input() showOptionsAsButtons?: boolean = false;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  @HostBinding('style.--radio-color') radioColor;
  @HostBinding('style.--radio-height') radioHeight;
  @HostBinding('style.--radio-width') radioWidth;
  @HostBinding('style.--radio-shadow') radioShadow;

  _value: string;
  isValid: boolean;

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
    this.checkValidity();
    this.setRadioConfig();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onValueChange(value: string) {
    this.blur.emit(value);
  }

  checkValidity() {
    this.isValid = Array.isArray(this.options);
  }

  setInvalidConfigText() {
    return (
      this.invalidConfigText ||
      'COMPONENT_LIBRARY_MODULE.INPUTS_MODULE.INVALID_CONFIG'
    );
  }

  setRadioConfig() {
    if (this.color) {
      this.radioColor = this.color;
    }
    if (this.width) {
      this.radioWidth = this.width;
    }
    if (this.height) {
      this.radioHeight = this.height;
    }
    if (this.shadowSettings) {
      this.radioShadow = this.shadowSettings?.boxShadow;
    }
    if (!this.height) {
      // default ng-zorro value
      this.radioHeight = '1.25rem';
    }
    if (!this.width) {
      // default ng-zorro value
      this.radioWidth = '1.25rem';
    }
    if (!this.color) {
      this.radioColor = 'var(--primary-color)';
    }
  }
}
