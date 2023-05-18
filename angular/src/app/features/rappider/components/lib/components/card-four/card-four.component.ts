import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';

@Component({
  selector: 'rappider-card-four',
  templateUrl: './card-four.component.html',
  styleUrls: ['./card-four.component.scss'],
})
export class RappiderCardFourComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() avatar: AvatarComponentConfig;
}
