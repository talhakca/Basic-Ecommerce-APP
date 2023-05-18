import { Component, Input } from '@angular/core';
import { ColorConfig, TypographyConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class RappiderInputErrorComponent {
  @Input() errors: string[];
  @Input() typography: TypographyConfig;
  @Input() colorSettings: ColorConfig;
}
