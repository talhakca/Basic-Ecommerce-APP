import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { IconComponentConfig } from '../../utils/icon';

@Component({
  selector: 'rappider-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class RappiderPanelComponent {
  /* title */
  @Input() title: HeadingComponentConfig;
  /* content */
  @Input() content: string;
  /* icon for title area  */
  @Input() icon: IconComponentConfig;
  /* background color  */
  @Input() backgroundColor;
}
