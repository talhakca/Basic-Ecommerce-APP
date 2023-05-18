import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { IconComponentConfig } from '../../utils/icon';
import { IconTextComponentConfig } from '../../utils/icon-text';

@Component({
  selector: 'rappider-card-fourteen',
  templateUrl: './card-fourteen.component.html',
  styleUrls: ['./card-fourteen.component.scss'],
})
export class RappiderCardFourteenComponent {
  @Input() additionalSubtitleIcon: IconComponentConfig;
  @Input() additionalSubtitle: HeadingComponentConfig;
  @Input() title: HeadingComponentConfig;
  @Input() subtitle: HeadingComponentConfig;
  @Input() iconTextItems: IconTextComponentConfig;
  @Input() htmlContent: string;
}
