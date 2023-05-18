import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
})
export class RappiderUserBlockComponent {
  /* title */
  @Input() title: HeadingComponentConfig;
  /* content */
  @Input() content: string;
  /* sub title */
  @Input() subtitle: HeadingComponentConfig;
  /* source of image */
  @Input() avatar: AvatarComponentConfig;
}
