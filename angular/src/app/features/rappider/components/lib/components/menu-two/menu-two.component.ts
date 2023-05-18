import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuActionBehavior, MenuItem } from '../../utils/menu-two';

@Component({
  selector: 'rappider-menu-two',
  templateUrl: './menu-two.component.html',
  styleUrls: ['./menu-two.component.scss'],
})
export class RappiderMenuTwoComponent {
  @Input() items: MenuItem[];
  @Input() isMobileView: boolean;
  @Input() mobileMenuVisibility: boolean;

  @Output() menuItemClick = new EventEmitter<MenuItem>();
  @Output() mobileMenuVisibilityChange = new EventEmitter<void>();

  constructor(private router: Router) {}

  menuClick(event: Event, menuItem: MenuItem) {
    event.stopPropagation();
    switch (menuItem.actionBehavior) {
      case MenuActionBehavior.Emit:
        this.menuItemClick.emit(menuItem);
        if (this.isMobileView && this.mobileMenuVisibility) {
          this.closeMobileMenu();
        }
        break;
      case MenuActionBehavior.Route:
        this.router.navigate([menuItem.redirectUrl], {
          queryParams: menuItem.queryParams,
        });
        if (this.isMobileView && this.mobileMenuVisibility) {
          this.closeMobileMenu();
        }
        break;
      default:
        break;
    }
  }

  closeMobileMenu() {
    this.mobileMenuVisibilityChange.emit();
  }

  /* this function avoids re-rendering the list unnecessarily, ngFOR only re-render items when 'status' change */
  trackMenu(index, item) {
    return index;
  }
}
