import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  HostBinding,
} from '@angular/core';
import { isObject } from 'lodash';
import { ActionConfigPlacement } from '../../utils/alert/action-config-placement.enum';
import { AlertTypes } from '../../utils/alert/alert-types';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig, HeadingType } from '../../utils/heading';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../../utils/shared';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class RappiderAlertComponent implements OnInit, OnChanges {
  /* data to emit */
  @Input() data: any;
  @Input() type: AlertTypes;
  @Input() title: HeadingComponentConfig;
  @Input() description: TextComponentConfig;
  @Input() showIcon: boolean;
  @Input() closeable: boolean;
  @Input() actionConfig?: ButtonComponentConfig;
  @Input() actionConfigPlacement: ActionConfigPlacement;
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;

  @Output() actionClick = new EventEmitter();

  @HostBinding('style.--alert-padding') padding;

  @HostBinding('style.--alert-height') height;
  @HostBinding('style.--alert-min-height') minHeight;
  @HostBinding('style.--alert-max-height') maxHeight;

  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges() {
    this.initDefaults();
  }

  initDefaults() {
    if (this.showIcon === null) {
      this.showIcon = true;
    }
    if (this.closeable === null) {
      this.closeable = true;
    }
    if (typeof this.description === 'string') {
      this.description = {
        text: this.description,
      };
    }
    if (typeof this.title === 'string') {
      this.title = {
        content: this.title,
        type: HeadingType.H5,
      };
    }
    this.setConfig();
  }

  onActionClick() {
    this.actionClick.emit(this.data);
  }

  setConfig() {
    if (this.paddingSettings) {
      this.padding = this.paddingSettings?.all;
    } else {
      this.padding = 'var(--padding-2x) var(--padding-4x)';
    }

    if (this.sizeSettings) {
      this.height = this.sizeSettings?.height;
      this.minHeight = this.sizeSettings?.minHeight;
      this.maxHeight = this.sizeSettings?.maxHeight;
    }
  }
}
