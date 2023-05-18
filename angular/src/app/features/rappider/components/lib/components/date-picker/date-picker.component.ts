import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostBinding,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
import { isDate } from 'moment';
import {
  DateFormat,
  DatePickerDateMode,
  DateSplitter,
} from '../../utils/date-picker';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderDatePickerComponent),
      multi: true,
    },
  ],
})
export class RappiderDatePickerComponent
  implements ControlValueAccessor, OnInit
{
  @Input() minSelectableDate: Date;
  @Input() maxSelectableDate: Date;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() placeholder: string;
  @Input() dateMode: DatePickerDateMode;
  @Input() boxBorder: boolean;
  @Input() borderSettings: BorderConfig;
  @Input() customSizeSettings: SizeConfig;
  @Input() shadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() colorSettings: ColorConfig;
  @Input() typography: TypographyConfig;
  @Input() dateFormat = DateFormat.MonthDayYear; // for US as default
  @Input() splitter = DateSplitter.Slash; // (/) as default

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<Date>();

  // for date-picker
  _value: Date;
  // for textbox
  textValue: string;

  // nzPopupStyle ile çalıştırmak istersek
  // calendarStyle = {
  //   border: '',
  //   borderTop: '',
  //   borderRight: '',
  //   borderBottom: '',
  //   borderLeft: '',
  //   borderRadius: '',
  //   borderTopLeftRadius: '',
  //   borderTopRightRadius: '',
  //   borderBottomLeftRadius: '',
  //   borderBottomRightRadius: '',
  //   borderColor: '',
  //   borderStyle: ''
  // };

  isOpen = false;
  isValid = false;
  format: string;
  mask: string;

  get value() {
    return this._value;
  }

  set value(value: Date | string) {
    this.setDateValue(value);
    this.onChange(this._value);
    this.onTouched();
    this.valueChange.emit(this._value);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    if (this.dateFormat) {
      this.format = this.dateFormat.replace(/[^a-zA-Z0-9]/g, this.splitter);
      this.placeholder = this.format.toUpperCase();
    }

    this.createMask();
  }

  writeValue(value): void {
    this.setDateValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDateValue(value: Date | string) {
    if (value) {
      const localeDateValue = new Date(value);
      if (isDate(localeDateValue) && !isNaN(localeDateValue.getTime())) {
        this._value = localeDateValue;
      } else {
        this._value = null;
      }
    } else {
      this._value = null;
    }
  }

  /** Checks if there is boundry for date picking,if so disables the unpickable dates */
  disabledDate = (current: Date): boolean => {
    const minCondition =
      differenceInCalendarDays(this.minSelectableDate, current) > 0;
    const maxCondition =
      differenceInCalendarDays(current, this.maxSelectableDate) > 0;

    /* Checks if there is both min and max condition */
    if (this.minSelectableDate && this.maxSelectableDate) {
      return !(!minCondition && !maxCondition);
    } else if (this.minSelectableDate) {
      /* Checks for min condition */
      return minCondition;
    } else if (this.maxSelectableDate) {
      /* Checks for max condition */
      return maxCondition;
    }
  };

  /**
   * Updating the textbox according to the format when we select data from the panel
   * @param value
   */
  onDateTimeChange(value: Date) {
    // we should control that dayValue and monthValue are greater than 9
    // if they greater than 9 we take directly, otherwise, we put 0 at the beginning
    const dayValue =
      value.getDate() > 9 ? value.getDate() : '0' + value.getDate();
    // monthValue is special case, because it starts from 0 not 1 so we add 1 to value to check it
    const monthValue =
      value.getMonth() + 1 > 9
        ? value.getMonth() + 1
        : '0' + (value.getMonth() + 1);
    const yearValue = value.getFullYear();
    if (this.dateFormat === DateFormat.MonthDayYear) {
      // MM/DD/YYYY
      this.textValue = `${monthValue}${this.splitter}${dayValue}${this.splitter}${yearValue}`;
    } else if (this.dateFormat === DateFormat.DayMonthYear) {
      // DD/MM/YYYY
      this.textValue = `${dayValue}${this.splitter}${monthValue}${this.splitter}${yearValue}`;
    } else if (this.dateFormat === DateFormat.YearMonthDay) {
      // YYYY/MM/DD
      this.textValue = `${yearValue}${this.splitter}${monthValue}${this.splitter}${dayValue}`;
    }
    this.valueChange.emit(value);
    this.blur.emit(this.textValue);
    this.isValid = true;
    this.isOpen = false;
  }

  /**
   * Selecting date based on data in textbox
   * @param value
   */
  onTextChange(value: string) {
    if (value.length === 10) {
      // for MM/DD/YYYY or YYYY/MM/DD
      if (
        this.dateFormat === DateFormat.MonthDayYear ||
        this.dateFormat === DateFormat.YearMonthDay
      ) {
        const localeDateValue = new Date(value);
        if (isDate(localeDateValue) && !isNaN(localeDateValue.getTime())) {
          this.value = localeDateValue;
          this.isValid = true;
          this.valueChange.emit(localeDateValue);
        } else {
          this.value = null;
        }
      } else if (this.dateFormat === DateFormat.DayMonthYear) {
        // for DD/MM/YYYY
        // when dateFormat is DD/MM/YYYY, date-picker gives wrong result like MM/DD/YYYY if value is valid (10/12/2023)
        // invalid example (30/12/2023) it gives error because month cannot be 30
        // so we should split the value of textbox by splitter (/, -, or .), and then replace month and day value
        const tempValue = value.split(this.splitter);
        const dateValue =
          tempValue[1] +
          this.splitter +
          tempValue[0] +
          this.splitter +
          tempValue[2];
        const localeDateValue = new Date(dateValue);
        if (isDate(localeDateValue) && !isNaN(localeDateValue.getTime())) {
          this.value = localeDateValue;
          this.isValid = true;
          this.valueChange.emit(localeDateValue);
        } else {
          this.value = null;
        }
      }
    } else {
      this.isValid = false;
      this.value = null;
    }
    this.blur.emit(value);
  }

  /**
   * Mask selection according to dateFormat and splitter
   */
  createMask() {
    if (this.dateFormat === DateFormat.MonthDayYear) {
      // M0/d0/0000
      this.mask = `M0${this.splitter}d0${this.splitter}0000`;
    } else if (this.dateFormat === DateFormat.DayMonthYear) {
      // d0/M0/0000
      this.mask = `d0${this.splitter}M0${this.splitter}0000`;
    } else if (this.dateFormat === DateFormat.YearMonthDay) {
      // 0000/M0/d0
      this.mask = `0000${this.splitter}M0${this.splitter}d0`;
    }
  }

  /**
   * When we focus in to textbox, date-picker's panel opens
   */
  onFocusInEvent() {
    this.isOpen = true;
  }

  /**
   * When we focus out from textbox, date-picker's panel closes
   */
  onFocusOutEvent() {
    this.isOpen = false;
  }
}
