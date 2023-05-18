import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { DividerComponentConfig } from '../../utils/divider';
import { DropdownMenuItem } from '../../utils/dropdown-menu/dropdown-menu-item.interface';
import { DropdownMenuLabelMode } from '../../utils/dropdown-menu/dropdown-menu-label-mode.enum';
import { DropdownMenuPlacement } from '../../utils/dropdown-menu/dropdown-menu-placement.enum';
import { DropdownMenuTriggerType } from '../../utils/dropdown-menu/dropdown-menu-trigger-type.enum';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { IconType } from '../../utils/icon/icon-type.enum';
import { Menu } from '../../utils/menu/menu.interface';
import { PaymentDetailItem } from '../../utils/payment-details/payment-details-item.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class RappiderPaymentDetailsComponent implements OnInit, OnChanges {
  /* card header */
  @Input() headerTitle: TextComponentConfig;
  /* header's content */
  @Input() headerContent: TextComponentConfig;
  /* card footer */
  @Input() footerTitle: TextComponentConfig;
  /* footer's content */
  @Input() footerContent: TextComponentConfig;
  /* card's items */
  @Input() cardItems: PaymentDetailItem[];
  /* dropdown menu items */
  @Input() dropdownMenuItems: DropdownMenuItem[];
  /* dropdown placement */
  @Input() dropdownMenuPlacement: DropdownMenuPlacement;
  /* dropdown button label */
  @Input() dropdownMenuLabel: string;
  /* dropdown button icon */
  @Input() dropdownMenuIcon: IconComponentConfig;
  /* dropdown item trigger type */
  @Input() dropdownMenuTriggerType: DropdownMenuTriggerType;
  /* dropdown label mode  */
  @Input() divider: DividerComponentConfig;
  @Input() dropdownLabelMode: DropdownMenuLabelMode;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();
  @Output() routerClick = new EventEmitter<ButtonComponentConfig>();
  @Output() menuItemClick = new EventEmitter<Menu>();
  @Output() dropdownMenuItemClick = new EventEmitter<DropdownMenuItem>();

  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.dropdownMenuTriggerType) {
      this.dropdownMenuTriggerType = DropdownMenuTriggerType.Click;
    }
    if (!this.dropdownMenuPlacement) {
      this.dropdownMenuPlacement = DropdownMenuPlacement.BottomRight;
    }
    if (!this.dropdownMenuIcon) {
      this.dropdownMenuIcon = {
        name: 'fas fa-caret-down',
        type: IconType.FontAwesome,
      };
    }
  }

  onDropdownMenuItemClick(value: DropdownMenuItem) {
    this.dropdownMenuItemClick.emit(value);
  }

  onMenuItemClick(menu: Menu) {
    this.menuItemClick.emit(menu);
  }

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }

  onRouterClick(router: ButtonComponentConfig) {
    this.routerClick.emit(router);
  }
}
