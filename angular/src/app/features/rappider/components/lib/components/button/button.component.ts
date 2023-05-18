import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { IconPlacement } from '../../utils/button/button-icon-placement.enum';
import { ButtonColorType } from '../../utils/button/button-color-type.enum';
import { ButtonShape } from '../../utils/button/button-shape.enum';
import { ButtonSize } from '../../utils/button/button-size.enum';
import { ButtonType } from '../../utils/button/button-type.enum';
import { IconComponentConfig } from '../../utils/icon/icon-component-config.interface';
import { FormButtonType } from '../../utils/button';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
} from '../../utils/shared';
import { TextComponentConfig } from '../../utils/text';
@Component({
  selector: 'rappider-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class RappiderButtonComponent implements OnInit, OnChanges {
  @Input() key: string;
  /* can be set to primary dashed link */
  @Input() type: ButtonType;
  /* 	can be set to circle round */
  @Input() shape: ButtonShape;
  /* button text */
  @Input() text: string;
  /* size */
  @Input() size: ButtonSize;
  /* make background transparent and invert text and border colors */
  @Input() transparent: boolean;
  /* set the loading status of button */
  @Input() loading: boolean;
  /* option to fit button width to its parent width */
  @Input() block: boolean;
  /* set the disabled status of button */
  @Input() disabled: boolean;
  /* color type */
  @Input() colorType: ButtonColorType;
  /* button icon interface */
  @Input() icon: IconComponentConfig;
  /* Title of the confirmation box */
  @Input() popconfirmTitle: string;
  /* Whether to directly emit onConfirm without showing Popconfirm */
  @Input() emitWithoutPopconfirm: boolean;
  /* Pop confirm cancel button text */
  @Input() popconfirmCancelText: string;
  /* Pop confirm confirm button text */
  @Input() popconfirmOkText: string;
  /* Make pop confirm button type danger */
  @Input() popconfirmOkDanger: boolean;

  @Input() iconPlacement: IconPlacement;
  /* the type of button */
  @Input() formButtonType: FormButtonType;
  @Input() borderSettings: BorderConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() shadowSettings: BoxShadowConfig;
  @Input() customColorSettings: ColorConfig;
  @Input() customSizeSettings: SizeConfig;

  /* tooltip text */
  @Input() tooltipText?: string;

  IconPlacement = IconPlacement;

  /* Callback of confirmation */
  @Output() confirm = new EventEmitter<void>();
  /* Callback of cancel */
  @Output() popconfirmCancel = new EventEmitter<void>();

  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges() {
    this.initDefaults();
  }

  initDefaults() {
    if (this.emitWithoutPopconfirm == null) {
      this.emitWithoutPopconfirm = true;
    }
    /* emit directly if popconfirm is doesnt exist or empty string */
    if (this.popconfirmTitle == null || this.popconfirmTitle === '') {
      this.emitWithoutPopconfirm = true;
    }
  }

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.popconfirmCancel.emit();
  }
}
