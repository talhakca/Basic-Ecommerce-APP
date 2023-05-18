import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  SidenavFooter,
  SidenavHeader,
  SidenavMenu,
} from '../../utils/material-sidenav';

@Component({
  selector: 'rappider-material-sidenav',
  templateUrl: './material-sidenav.component.html',
  styleUrls: ['./material-sidenav.component.scss'],
})
export class RappiderMaterialSidenavComponent {
  @Input() opened = false;
  @Input() header: SidenavHeader;
  @Input() menu: SidenavMenu[];
  @Input() footer: SidenavFooter;
  @Input() isCollapsible = true;

  constructor(private router: Router) {}

  openDrawer(e: Event) {
    e.stopPropagation();
    this.opened = true;
  }

  closeDrawer(e: Event) {
    e.stopPropagation();
    this.opened = false;
    this.menu?.forEach((m) => (m.isExpanded = false));
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
