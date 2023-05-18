import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';
import { ButtonComponentConfig } from '../../utils/button';
import { DropdownMenuComponentConfig } from '../../utils/dropdown-menu';
import { HeadingComponentConfig } from '../../utils/heading';
import { SwitchComponentConfig, SwitchTextPosition } from '../../utils/switch';
import { TextMode } from '../../utils/text';

@Component({
  selector: 'rappider-internal-title-toolbar',
  templateUrl: './title-toolbar.component.html',
  styleUrls: ['./title-toolbar.component.scss'],
})
export class RappiderInternalTitleToolbarComponent implements OnChanges {
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
  @Input() switchSettings: SwitchComponentConfig;

  @Output() titleBarActionButtonClick =
    new EventEmitter<ButtonComponentConfig>();
  @Output() switchToggled = new EventEmitter<boolean>();

  codeViewSwitchSettings = {
    tooltipText: 'Switch to code view',
    text: {
      content: 'Code view',
      textMode: TextMode.Html,
    },
    textPosition: SwitchTextPosition.Left,
    defaultValue: false,
  };

  constructor(private router: Router) {}

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
    if (switchValue) {
      /* navigate to source code */
      this.router.navigate(['/source-code'], {
        queryParams: { p: window.location.pathname },
      });
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const sourcePath = urlParams.get('p');
      if (sourcePath) {
        console.log(sourcePath);
        this.router.navigate([sourcePath]);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}
