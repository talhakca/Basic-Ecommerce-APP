import { Component, Input } from '@angular/core';
import { HeadingType } from '../../utils/heading/heading-type.enum';
import { ColorConfig } from '../../utils/shared/color/color.interface';
import { TypographyConfig } from '../../utils/shared/typography/typography.interface';

@Component({
  selector: 'rappider-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
})
export class RappiderHeadingComponent {
  /* heading type  */
  @Input() type: HeadingType;
  /* content  */
  @Input() content: string;
  @Input() typography: TypographyConfig;
  @Input() colorSettings: ColorConfig;

  HeadingType = HeadingType;
}
