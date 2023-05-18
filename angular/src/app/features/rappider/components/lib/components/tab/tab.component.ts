import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class RappiderTabComponent {
  @Input() title: HeadingComponentConfig;
  @Input() text: TextComponentConfig;
  @Input() disabled?: boolean;
  @Input() icon: IconComponentConfig;
}
