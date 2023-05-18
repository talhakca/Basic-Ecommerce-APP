import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  ButtonComponentConfig,
  HeadingComponentConfig,
  IconComponentConfig,
  SelectableOption,
  SwitchComponentConfig,
} from '../../utils';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu/dropdown-menu.interface';

@Component({
  selector: 'rappider-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class RappiderTitleBarComponent implements OnInit {
  @Input() mainTitle: HeadingComponentConfig;
  @Input() options: BreadcrumbOption[];
  @Input() cssStyle: any;
  @Input() dropdownMenu: DropdownMenuComponentConfig;
  @Input() actionIcon: IconComponentConfig;
  @Input() actionButtons: ButtonComponentConfig[];
  @Input() displayBreadcrumb = true;
  @Input() switchSettings: SwitchComponentConfig;
  @Input() radioButtonSettings: SelectableOption[];

  @Output() optionClick = new EventEmitter<BreadcrumbOption>();
  @Output() menuItemClick = new EventEmitter<DropdownMenuItem>();
  @Output() actionIconClick = new EventEmitter();
  @Output() actionButtonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() radioButtonClick = new EventEmitter<string>();
  @Output() switchToggled = new EventEmitter<boolean>();

  switchChecked: boolean;

  ngOnInit() {
    if (this.switchSettings?.defaultValue) {
      this.switchChecked = !!this.switchSettings?.defaultValue;
    }
  }

  onSwitchValueChanged(event) {
    this.switchChecked = !!event;
    this.switchToggled.emit(this.switchChecked);
  }

  onOptionClick(option: BreadcrumbOption) {
    this.optionClick.emit(option);
  }

  onMenuItemClick(menu: DropdownMenuItem) {
    this.menuItemClick.emit(menu);
  }

  onActionIconClick() {
    this.actionIconClick.emit();
  }

  onClickActionButton(button: ButtonComponentConfig) {
    this.actionButtonClick.emit(button);
  }

  onRadioButtonValueChange(radioValue) {
    this.radioButtonClick.emit(radioValue);
    console.log(event);
  }
}
