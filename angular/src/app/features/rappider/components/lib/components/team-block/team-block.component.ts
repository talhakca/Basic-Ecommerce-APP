import { Component, Input } from '@angular/core';
import { DividerComponentConfig } from '../../utils/divider';
import { HeadingComponentConfig } from '../../utils/heading';
import { ImageComponentConfig } from '../../utils/image';

@Component({
  selector: 'rappider-team-block',
  templateUrl: './team-block.component.html',
  styleUrls: ['./team-block.component.scss'],
})
export class RappiderTeamBlockComponent {
  @Input() image: ImageComponentConfig;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* sub title */
  @Input() subtitle: HeadingComponentConfig;
  /* content */
  @Input() content: string;
  /* divider */
  @Input() divider: DividerComponentConfig;
}
