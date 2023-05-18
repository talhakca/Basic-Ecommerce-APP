import {
  Component,
  EventEmitter,
  forwardRef,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FONT_AWESOME_ICONS } from '../../utils/icon-picker/font-awesome-icons.variable';
import { ICON_PICKER_CONFIG } from '../../utils/icon-picker/icon-picker-config.variable';
import { IconPickerValue } from '../../utils/icon-picker/icon-picker-value';
import { NG_ZORRO_ICONS } from '../../utils/icon-picker/ng-zorro-icons.variable';
import { IconType } from '../../utils/icon/icon-type.enum';
import { MenuActionBehavior } from '../../utils/menu/menu-action-behavior.enum';
import { MenuConfig } from '../../utils/menu/menu-config.interface';
import { MenuMode } from '../../utils/menu/menu-mode.enum';
import { Menu } from '../../utils/menu/menu.interface';

@Component({
  selector: 'rappider-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderIconPickerComponent),
      multi: true,
    },
  ],
})
export class RappiderIconPickerComponent
  implements OnInit, ControlValueAccessor
{
  @Output() blur = new EventEmitter<IconPickerValue>();
  @Output() valueChange = new EventEmitter<IconPickerValue>();

  /**
   *  icon value
   *
   * @type {IconPickerValue}
   * @memberof RappiderIconPickerComponent
   */
  _value: IconPickerValue;

  /* icon picker config */
  ICON_PICKER_CONFIG = ICON_PICKER_CONFIG;
  /* menu config */
  menuConfig: MenuConfig;
  /* font awesome icon names and styles */
  fontAwesomeIcons = FONT_AWESOME_ICONS;
  /* ng zorro icon names and themes */
  ngZorroIcons = NG_ZORRO_ICONS;
  /* selected icon library */
  selectedLibrary = IconType.FontAwesome;
  /* selected icon index */
  selectedIndex: number;
  /* wrapper button text */
  buttonText: string;
  /* selected icon value */
  selectedIcon: IconPickerValue;

  selectedSection: any;
  isIconPickerModalVisible = false;

  get value() {
    return this._value;
  }

  set value(value: IconPickerValue) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  ngOnInit(): void {
    this.setMenuConfig();
    this.changeSection(this.selectedLibrary);
    this.changeButtonText();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: IconPickerValue): void {
    if (value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  showIconPickerModal() {
    this.isIconPickerModalVisible = true;
  }

  closeIconPickerModal() {
    this.isIconPickerModalVisible = false;
  }

  /**
   * assigns clicked icons values on icon picker to selectedIcon
   * assign clicked icons index to selectedIndex
   *
   * @param {IconPickerValue} value
   * @param {number} index
   * @memberof RappiderIconPickerComponent
   */
  onIconSelect(value: IconPickerValue, index: number) {
    this.selectedIcon = value;
    this.selectedIndex = index;
  }

  /**
   * sets menu config according to present icon libraries
   *
   * @memberof RappiderIconPickerComponent
   */
  setMenuConfig() {
    const menuItemsConfig = Object.values(IconType).map((value) =>
      // TODO: fix the code below
      // if (value === IconType.NgZorro) { }
      ({
        label: value,
        data: value,
        actionBehavior: MenuActionBehavior.Emit,
      })
    );
    this.menuConfig = {
      mode: MenuMode.Vertical,
      items: menuItemsConfig,
    };
  }

  onLibrarySelect(menuItem: Menu) {
    this.changeSection(<IconType>menuItem.data);
  }

  changeSection(selectedLibrary: IconType) {
    this.selectedSection = this.ICON_PICKER_CONFIG.sections.find(
      (item) => item.iconType === selectedLibrary
    );
    this.selectedIndex = null;
  }

  /**
   * emits selected icons value when clicked ok on icon picker modal
   *
   * @memberof RappiderIconPickerComponent
   */
  onClickOk() {
    this.value = {
      ...this.selectedIcon,
      type: this.selectedSection.iconType,
    };
    this.blur.emit(this.value);
    this.closeIconPickerModal();
    this.changeButtonText();
  }

  /**
   * changes wrappers button text
   *
   * @memberof RappiderIconPickerComponent
   */
  changeButtonText() {
    this.buttonText = this.value ? 'Selected icon' : 'Select icon';
  }

  getCardClass(index: number) {
    return index === this.selectedIndex ? 'selected-card' : 'card';
  }
}
