import { Component, Input } from '@angular/core';
import { CollapseIconPosition } from '../../utils/collapse/collapse-icon-position.enum';
import { Panel } from '../../utils/panel/panel.interface';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class RappiderAccordionComponent {
  @Input() panels: Panel[];
  @Input() bordered: boolean;
  @Input() collapseIconPosition: CollapseIconPosition;
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
}
