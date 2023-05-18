import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CODEMIRROR_JSON_SETTINGS } from '../../utils/codemirror/codemirror-json-settings.variable';
import { ListGridDataInputDataType } from '../../utils/list-grid-data-input/list-grid-data-input-data-type.enum';

@Component({
  selector: 'rappider-list-grid-data-input',
  templateUrl: './list-grid-data-input.component.html',
  styleUrls: ['./list-grid-data-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderListGridDataInputComponent),
      multi: true,
    },
  ],
})
export class RappiderListGridDataInputComponent
  implements ControlValueAccessor
{
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<any>();

  /**
   * data value
   *
   * @type {*}
   * @memberof ListGridDataInputComponent
   */
  _value: any;
  /* codemirror value */
  jsonValue;
  dataUrl: string;
  /* options for radio component */
  radioOptions = [
    {
      key: 'Static Data',
      value: 'static',
    },
    {
      key: 'Dinamic Data',
      value: 'dynamic',
    },
  ];
  dataType = ListGridDataInputDataType.Static;
  /* settings for codemirror component */
  codeMirrorSettings = CODEMIRROR_JSON_SETTINGS;
  /* flags */
  isModalVisible = false;
  isCodemirrorLoading = true;

  constructor(private nzNotificationService: NzNotificationService) {}

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value) {
      this.jsonValue = JSON.stringify(value);
      this._value = value;
    } else {
      this._value = {};
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onJsonValueChange() {}

  onButtonClick() {
    this.isModalVisible = true;
    setTimeout(() => (this.isCodemirrorLoading = false), 500);
  }

  onAddListGridDataSubmit() {
    try {
      this.value = JSON.parse(this.jsonValue);
      /* to trigger setter */
      this.value = { ...this.value };
      this.blur.emit(this.value);
      this.hideModal();
    } catch (error) {
      this.nzNotificationService.error('Error', 'Wrong JSON Format');
    }
  }

  hideModal() {
    this.isModalVisible = false;
    this.isCodemirrorLoading = false;
  }
}
