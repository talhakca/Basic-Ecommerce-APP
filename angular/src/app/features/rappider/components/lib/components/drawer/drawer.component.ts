import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DrawerPlacement } from '../../utils/drawer/drawer-placement.enum';

@Component({
  selector: 'rappider-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class RappiderDrawerComponent {
  /* The title for Drawer. */
  @Input() title: string;
  @Input() closable: boolean;
  /* Width of the Drawer dialog, only when placement is 'right' or 'left' */
  @Input() width: number;
  /* Height of the Drawer dialog, only when placement is 'top' or 'bottom' */
  @Input() height: number;
  /* Whether the Drawer dialog is visible or not */
  @Input() visible: boolean;
  /* The placement of the Drawer. */
  @Input() placement: DrawerPlacement;
  /* The footer for Drawer. */
  @Input() footer: string;
  /* Whether support press esc to close */
  @Input() keyboard: boolean;
  /* Custom close icon */
  @Input() closeIcon: string;
  /* Whether to close the drawer when the user goes backwards/forwards in history. */
  @Input() closeOnNavigation: boolean;
  /* Whether to show mask or not. */
  @Input() mask: boolean;
  /* Clicking on the mask (area outside the Drawer) to close the Drawer or not. */
  @Input() maskClosable: boolean;
  /* Style for Drawer's mask element */
  @Input() maskStyle: object;
  /* Body style for drawer body element. Such as height, padding etc. */
  @Input() bodyStyle: object;
  /* The the X coordinate offset(px), only when placement is 'right' or 'left' */
  @Input() offsetX: number;
  /* The the Y coordinate offset(px), only when placement is 'top' or 'bottom' */
  @Input() offsetY: number;
  /* The class name of the container of the Drawer dialog. */
  @Input() wrapClassName: string;
  /* The z-index of the Drawer. */
  @Input() zIndex: number;

  @Output() close = new EventEmitter();
  @Output() visibleChange = new EventEmitter<boolean>();

  onClose() {
    this.close.emit();
  }

  onVisibleChange(visible: boolean) {
    this.visibleChange.emit(visible);
  }
}
