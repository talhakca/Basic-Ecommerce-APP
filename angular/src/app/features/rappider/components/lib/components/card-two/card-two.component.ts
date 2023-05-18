import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar';
import { DividerComponentConfig } from '../../utils/divider';
import { HeadingComponentConfig } from '../../utils/heading';
import { ImageComponentConfig } from '../../utils/image';
import { Tag } from '../../utils/tag';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss'],
})
export class RappiderCardTwoComponent {
  /* tag on the top left of the card */
  @Input() tag: Tag;
  /* background image */
  @Input() backgroundImage: ImageComponentConfig;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* title's router link */
  @Input() titleLink: string;
  /* content */
  @Input() content: TextComponentConfig;
  /* user's name */
  @Input() sourceName: string;
  /* user's router link */
  @Input() sourceLink: string;
  /* user's avatar */
  @Input() sourceAvatar: AvatarComponentConfig;

  @Input() divider: DividerComponentConfig;
}
