import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  IconTextColumnCount,
  IconTextItem,
  IconTextListMode,
} from '../../utils/icon-text';
import { IconTextActionBehavior } from '../../utils/icon-text/icon-text-action-behavior';
import { IconTextContentMode } from '../../utils/icon-text/icon-text-content-mode.enum';

@Component({
  selector: 'rappider-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss'],
})
export class RappiderIconTextComponent {
  @Input() items: IconTextItem[];
  @Input() iconTextListMode: IconTextListMode;
  @Input() iconTextContentMode: IconTextContentMode;
  @Input() iconTextColumnCount: IconTextColumnCount;
  @Input() verticalGap: string;

  @Output() itemClick = new EventEmitter();

  IconTextActionBehavior = IconTextActionBehavior;
  IconTextContentMode = IconTextContentMode;
  IconTextListMode = IconTextListMode;

  constructor(private router: Router) {}

  onItemClick(item: IconTextItem) {
    if (item.routeBehavior === IconTextActionBehavior.Route) {
      this.router.navigate([item.redirectrUrl]);
    } else {
      this.itemClick.emit(item);
    }
  }

  getBootstrapColumnCssClassName() {
    switch (this.iconTextColumnCount) {
      case IconTextColumnCount.One:
        return 'col-12';
      case IconTextColumnCount.Two:
        return 'col-lg-6 col-md-12';
      case IconTextColumnCount.Three:
        return 'col-lg-4 col-md-6 col-sm-12';
      case IconTextColumnCount.Four:
        return 'col-lg-3 col-md-6 col-sm-12';
      case IconTextColumnCount.Auto:
        return 'col';
      default:
        return 'col';
    }
  }
}
