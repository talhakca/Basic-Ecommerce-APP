import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { IconComponentConfig } from '../../utils/icon';
import { ImageComponentConfig } from '../../utils/image';
import { CardStatus } from '../../utils/profile-card-two/card-status.enum';

@Component({
  selector: 'rappider-profile-card-two',
  templateUrl: './profile-card-two.component.html',
  styleUrls: ['./profile-card-two.component.scss'],
})
export class RappiderProfileCardTwoComponent {
  @Input() profilePhoto: ImageComponentConfig;
  @Input() title: HeadingComponentConfig;
  @Input() cardStatus: CardStatus;
  @Input() content: string;
  @Input() icon: IconComponentConfig;
  @Input() iconBadgeCount: number;
}
