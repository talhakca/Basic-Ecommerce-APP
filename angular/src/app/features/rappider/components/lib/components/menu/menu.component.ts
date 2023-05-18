import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { cloneDeep } from 'lodash';
import { MenuPlacement } from '../../utils/menu';
import { MenuActionBehavior } from '../../utils/menu/menu-action-behavior.enum';
import { MenuConfig } from '../../utils/menu/menu-config.interface';
import { MenuMode } from '../../utils/menu/menu-mode.enum';
import { Menu } from '../../utils/menu/menu.interface';

@Component({
  selector: 'rappider-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class RappiderMenuComponent implements OnInit, OnChanges {
  @Input() config: MenuConfig;
  @Input() isCollapsed = false;
  /* coefficient value of levels paddingValue. */
  @Input() paddingValue = 24;
  @Input() menuPlacement: MenuPlacement;
  /* shows and hides labels, used to support collapsed menu */
  @Input() showLabels?: boolean = true;

  @Output() menuItemClick = new EventEmitter<Menu>();

  MenuMode = MenuMode;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.config = cloneDeep(this.config);
    this.initDefault();
  }

  /* If there is menus data, calls addLevelFieldToMenus function */
  ngOnChanges(changes: SimpleChanges): void {
    this.config = cloneDeep(this.config);
    if (changes.config) {
      this.addLevelFieldToMenus(this.config?.items, 1);
      this.initDefault();
    }
  }

  /**
   * if there is no mode, assign default mode
   *
   * @memberof RappiderMenuComponent
   */
  initDefault() {
    if (this.config?.mode == null) {
      this.config = {
        ...this.config,
        mode: MenuMode.Inline,
      };
    }
    if (this.config?.backgroundColor == null) {
      this.config.backgroundColor = 'transparent';
    }
    if (!this.menuPlacement) {
      this.menuPlacement = MenuPlacement.Left;
    }
  }

  /* Adds level to input data for padding purpose. See HTML [nzPaddingLeft] */
  addLevelFieldToMenus(menu: Menu[], level: number) {
    // tslint:disable-next-line: forin
    if (menu?.length) {
      for (const key in menu) {
        if (key) {
          menu[key] = {
            ...menu[key],
            level: level,
          };
          if (menu[key].children) {
            this.addLevelFieldToMenus(menu[key].children, level + 1);
          }
        }
      }
    }
  }

  /**
   * Get Padding Left Value
   *
   * @param {number} menuLevel
   * @return {*}
   * @memberof RappiderMenuComponent
   */
  getPaddingLeftValue(menuLevel: number) {
    switch (this.config?.mode) {
      case MenuMode.Horizontal:
        return 0;
      case MenuMode.Inline:
        return menuLevel * this.paddingValue;
      case MenuMode.Vertical:
        return menuLevel * this.paddingValue;
      default:
        return menuLevel * this.paddingValue;
    }
  }

  /* If menu-item has behavior route then navigate to url, else emits the menu item */
  menuClick(event: Event, menu: Menu) {
    event.stopPropagation();
    switch (menu.actionBehavior) {
      case MenuActionBehavior.Router:
        if (menu.redirectUrl) {
          this.router.navigate([menu.redirectUrl], {
            queryParams: menu.queryParams,
          });
        }
        break;

      case MenuActionBehavior.Emit:
        this.menuItemClick.emit(menu);
        break;

      default:
        break;
    }
  }

  setMenuPlacement() {
    switch (this.menuPlacement) {
      case MenuPlacement.Center:
        return 'justify-content:center';
      case MenuPlacement.Left:
        return 'justify-content:left';
      case MenuPlacement.Right:
        return 'justify-content:right';
      default:
        return 'justify-content:left';
    }
  }
}
