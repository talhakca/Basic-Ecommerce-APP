import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
  OnChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CalendarEvent } from '../../utils/calendar/calendar-event.interface';
import { CALENDAR_FORM_CONFIG } from '../../utils/calendar/calendar-form-config';
import { CalendarMode } from '../../utils/calendar/calendar-mode.enum';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderCalendarComponent),
      multi: true,
    },
  ],
})

// eslint brace-style: "error"
export class RappiderCalendarComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @Input() mode: CalendarMode;
  @Input() isFullscreen: boolean;
  @Input() calendarEvents: CalendarEvent[];
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() typographySettings: TypographyConfig;

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() blur = new EventEmitter<Date>();
  @Output() valueChange = new EventEmitter<Date>();
  @Output() updateEventSubmit = new EventEmitter<any>();
  @Output() createEventSubmit = new EventEmitter<any>();

  _value: Date;
  formConfig = CALENDAR_FORM_CONFIG;
  createEventPopoverVisibilities = {};

  get value() {
    return this._value;
  }

  set value(value: Date) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
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

  onValueChange(value: Date) {
    this.blur.emit(value);
  }

  ngOnInit() {
    this.setPopoverVisibilityFlag();
  }

  ngOnChanges() {
    this.setPopoverVisibilityFlag();
  }

  setPopoverVisibilityFlag() {
    this.calendarEvents = this.calendarEvents?.map((calendarEvent) => ({
      ...calendarEvent,
      popoverVisibility: false,
    }));
  }

  isDateBetween(date: Date, starts: string, ends: string) {
    const startDate = new Date(starts);
    const endDate = new Date(ends);
    return (
      date.getTime() >= startDate.getTime() &&
      date.getTime() <= endDate.getTime()
    );
  }

  openEventDetailPopover(item: CalendarEvent) {
    item.popoverVisibility = true;
  }

  closeEventDetailPopover(item: CalendarEvent): void {
    item.popoverVisibility = false;
    item.updateEventMode = false;
  }

  openUpdateEventMode(item: CalendarEvent) {
    item.updateEventMode = true;
  }

  cancelUpdateEventMode(item: CalendarEvent) {
    item.updateEventMode = false;
  }

  submitUpdateEventForm(formValue, item: CalendarEvent) {
    this.updateEventSubmit.emit(formValue);
    // close popover
    this.closeEventDetailPopover(item);
  }

  openCreateEventPopover(date: Date) {
    const dateString = date.toDateString();
    this.createEventPopoverVisibilities = {
      ...this.createEventPopoverVisibilities,
      [dateString]: true,
    };
  }

  closeCreateEventPopover(date: Date) {
    const dateString = date.toDateString();
    this.createEventPopoverVisibilities = {
      ...this.createEventPopoverVisibilities,
      [dateString]: false,
    };
  }

  createEvent(formValue, dateOnPopoverVisible: Date) {
    this.createEventSubmit.emit(formValue);
    this.createEventPopoverVisibilities = {
      ...this.createEventPopoverVisibilities,
      [dateOnPopoverVisible.toDateString()]: false,
    };
  }
}
