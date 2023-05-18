import { Component, Input } from '@angular/core';
import { IconComponentConfig } from '../../utils/icon';
import { ColorConfig, TypographyConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss'],
})
export class RappiderInputLabelComponent {
  @Input() title: string;
  @Input() iconTooltipTitle: string;
  @Input() typography: TypographyConfig;
  @Input() colorSettings: ColorConfig;
  @Input() icon: IconComponentConfig;
}
