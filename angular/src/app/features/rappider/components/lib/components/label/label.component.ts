import { Component, Input } from '@angular/core';
import { ColorConfig, TypographyConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class RappiderLabelComponent {
  @Input() content: string;
  @Input() typography: TypographyConfig;
  @Input() colorSettings: ColorConfig;
}
