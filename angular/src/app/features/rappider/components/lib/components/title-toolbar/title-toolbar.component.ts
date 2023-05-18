import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';
import { ButtonComponentConfig } from '../../utils/button';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu';
import { SelectableOption } from '../../utils/form-utils';
import { HeadingComponentConfig } from '../../utils/heading';
import { SwitchComponentConfig } from '../../utils/switch';

@Component({
  selector: 'rappider-title-toolbar',
  templateUrl: './title-toolbar.component.html',
  styleUrls: ['./title-toolbar.component.scss'],
})
export class RappiderTitleToolbarComponent implements OnChanges {
  @Input() mainTitle: HeadingComponentConfig;
  /* flag to display or hide the toolbar */
  @Input() displayToolbar = false;
  /* explicit option to pass to the toolbar in order to set the visiblity of back button */
  @Input() displayToolbarBackButton = false;
  /* flag to display breadcrumb under title */
  @Input() displayBreadcrumb = true;
  @Input() options: BreadcrumbOption[] | string[] | string;
  @Input() titleBarActionButtons?: ButtonComponentConfig[];
  @Input() titleBarActionMenu?: DropdownMenuComponentConfig;
  @Input() titleBarSwitchSettings: SwitchComponentConfig;
  @Input() titleBarRadioButtonSettings: SelectableOption[];

  @Output() titleBarActionButtonClick =
    new EventEmitter<ButtonComponentConfig>();
  @Output() titleBarRadioButtonClick = new EventEmitter<string>();
  @Output() switchToggled = new EventEmitter<boolean>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.mapTitleBreadcrumbOptionsToLabel(changes.options?.currentValue);
  }

  mapTitleBreadcrumbOptionsToLabel(value: any) {
    if (value && typeof value[0] === 'string') {
      try {
        this.options = value.map((item) => ({
          label: item,
        }));
      } catch (error) {
        this.options = [{ label: value }];
      }
    }
  }

  onTitleBarActionButtonClick(button: ButtonComponentConfig) {
    this.titleBarActionButtonClick.emit(button);
  }

  onSwitchToggled(switchValue: boolean) {
    this.switchToggled.emit(switchValue);
  }

  onTitleBarRadioButtonClick(selectedValue: string) {
    this.titleBarRadioButtonClick.emit(selectedValue);
  }
}
