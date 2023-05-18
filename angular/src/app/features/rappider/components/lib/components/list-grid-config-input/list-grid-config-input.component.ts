import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Action } from '../../utils/action-utils/action.interface';
import { CheckboxComponentConfig } from '../../utils/checkbox';
import { InputSize } from '../../utils/shared/input-size/input-size.enum';
import { HeadingComponentConfig } from '../../utils/heading';
import { LIST_GRID_CONFIG_INPUT } from '../../utils/list-grid-config-input/list-grid-config-input.config';
import { CrudTableViewColumn } from '../../utils/list-grid/crud-table-view-column.interface';
import { CrudTableViewConfig } from '../../utils/list-grid/crud-table-view-config.interface';
import { SINGLE_NOT_SEARCHABLE_SELECT_SETTINGS } from '../../utils/select/single-not-searchable-select.settings';

@Component({
  selector: 'rappider-list-grid-config-input',
  templateUrl: './list-grid-config-input.component.html',
  styleUrls: ['./list-grid-config-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderListGridConfigInputComponent),
      multi: true,
    },
  ],
})
export class RappiderListGridConfigInputComponent
  implements OnInit, ControlValueAccessor
{
  @Input() checkbox: CheckboxComponentConfig;

  @Output() blur = new EventEmitter<CrudTableViewConfig>();

  _value: CrudTableViewConfig;
  editListGridModalVisible = false;

  /* local variables */
  /* title data for CrudTableViewConfig */
  title: HeadingComponentConfig;
  /* searchable data for CrudTableViewConfig */
  searchable: boolean;
  /* column visibility selectable data for CrudTableViewConfig */
  columnVisibilitySelectable: boolean;
  /* default search field data for CrudTableViewConfig */
  defaultSearchField: string;
  /* columns data for CrudTableViewConfig */
  columns: CrudTableViewColumn[];
  /* selectable data for CrudTableViewConfig */
  selectable: boolean;
  /* list actions data for CrudTableViewConfig */
  listActions: Action[];
  /* item actions data for CrudTableViewConfig */
  itemActions: Action[];
  /* size data for CrudTableViewConfig */
  size: InputSize;
  orderable: boolean;
  /* select component settings for input sizes */
  inputSizes = [];

  /* preview field names for json array component */
  columnsPreviewFieldNames = ['title', 'fieldName', 'type'];
  actionsPreviewFieldNames = ['name', 'text'];

  /* settings for select component */
  SINGLE_SELECT_SETTINGS_CONFIG = SINGLE_NOT_SEARCHABLE_SELECT_SETTINGS;

  LIST_GRID_CONFIG_INPUT = LIST_GRID_CONFIG_INPUT;

  /**
   * config value
   *
   * @memberof ListGridConfigInputComponent
   */
  get value() {
    return this._value;
  }

  set value(value: CrudTableViewConfig) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.getInputSizes();
  }

  setInit() {
    this.title.content = this.value.title.content || '';
    this.columnVisibilitySelectable = !!this.value.columnVisibilitySelectable;
    this.defaultSearchField = this.value.defaultSearchField || '';
    this.columns = this.value.columns || [];
    this.listActions = this.value.listActions || [];
    this.itemActions = this.value.itemActions || [];
    this.size = this.value.size || InputSize.Default;
    this.searchable = !!this.value.searchable;
    this.selectable = !!this.value.selectable;
    this.orderable = !!this.value.orderable;
  }

  writeValue(value): void {
    if (value) {
      this._value = value;
      this.setInit();
    } else {
      this._value = { columns: [] };
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onEditListGridButtonClick() {
    this.editListGridModalVisible = true;
  }

  closeEditListGridModal() {
    this.editListGridModalVisible = false;
  }

  onEditListGridModalSubmit() {
    this.value = { ...this.value };
    this.blur.emit(this.value);
    this.closeEditListGridModal();
  }

  onColumnsChange() {
    this.value.columns = this.columns;
  }

  onListActionsChange() {
    this.value.listActions = this.listActions;
  }

  onItemActionsChange() {
    this.value.itemActions = this.itemActions;
  }

  onSizeChange() {
    this.value.size = this.size;
  }

  onOrderableChange() {
    this.value.orderable = this.orderable;
  }

  getInputSizes() {
    this.inputSizes = Object.entries(InputSize).map(([key, value]) => ({
      key: key,
      value: value,
    }));
  }
}
