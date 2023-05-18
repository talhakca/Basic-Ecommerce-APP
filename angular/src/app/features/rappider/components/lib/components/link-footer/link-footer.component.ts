import { Component, Input } from '@angular/core';
import { LinkFooterItem } from '../../utils/link-footer';

@Component({
  selector: 'rappider-link-footer',
  templateUrl: './link-footer.component.html',
  styleUrls: ['./link-footer.component.scss'],
})
export class RappiderLinkFooterComponent {
  /**
   *Displays link footer items
   *
   * @type {LinkFooterItem[]}
   * @memberof RappiderLinkFooterComponent
   */
  @Input() items: LinkFooterItem[];
}
