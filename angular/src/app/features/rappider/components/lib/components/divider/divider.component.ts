import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DividerStyle } from '../../utils/divider';
import { DividerOrientation } from '../../utils/divider/divider-orientation.enum';
import { DividerType } from '../../utils/divider/divider-type.enum';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../../utils/shared';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class RappiderDividerComponent implements OnInit {
  @Input() style: DividerStyle;
  @Input() type: DividerType;
  @Input() text: TextComponentConfig;
  @Input() textPlacement: DividerOrientation;
  @Input() dividerWidth: string;
  @Input() dividerColor: string;
  // alttakiler silinecek
  @Input() borderSettings: BorderConfig;
  @Input() customSizeSettings: SizeConfig;
  @Input() shadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;

  @HostBinding('style.--border-color') borderColor;
  @HostBinding('style.--border-width') borderWidth;

  ngOnInit(): void {
    this.setConfig();
  }

  setConfig() {
    if (this.dividerColor) {
      this.borderColor = this.dividerColor;
    } else {
      this.borderColor = 'var(--primary-border-color)';
    }

    if (this.dividerWidth) {
      this.borderWidth = this.dividerWidth;
    } else {
      this.borderWidth = 'var(--border-size-x)';
    }
  }
}
