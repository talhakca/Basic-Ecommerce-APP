import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActionBehavior } from '../../utils/action-utils/action-behavior.enum';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { IconAndMenuListItem } from '../../utils/icon-and-menu-list/icon-and-menu-list-item.interface';

@Component({
  selector: 'rappider-icon-and-menu-list',
  templateUrl: './icon-and-menu-list.component.html',
  styleUrls: ['./icon-and-menu-list.component.scss'],
})
export class RappiderIconAndMenuListComponent {
  /* data to emit */
  @Input() data: any;

  /* list items */
  @Input() items: IconAndMenuListItem[];

  /* card title */
  @Input() title: string;

  /* button */
  @Input() button: ButtonComponentConfig;

  /* action behavior */
  @Input() buttonActionBehavior: ActionBehavior;

  /* redirect url of the button */
  @Input() buttonRedirectUrl: string;

  /* button click event emitter */
  @Output() buttonClick = new EventEmitter();

  constructor(private router: Router) {}

  onButtonClick() {
    switch (this.buttonActionBehavior) {
      case ActionBehavior.Route:
        if (this.buttonRedirectUrl) {
          this.router.navigateByUrl(this.buttonRedirectUrl);
        }
        break;
      case ActionBehavior.Emit:
      default:
        this.buttonClick.emit(this.data);
        break;
    }
  }
}
