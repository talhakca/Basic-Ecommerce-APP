import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AutocompleteDataSource } from 'ng-zorro-antd/auto-complete';
import {
  BorderConfig,
  BoxShadowConfig,
  ColorConfig,
  SizeConfig,
  SpacingConfig,
  TypographyConfig,
} from '../../utils/shared';

@Component({
  selector: 'rappider-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class RappiderAutoCompleteComponent {
  /* backfill selected item the input when using keyboard */
  @Input() backfill: boolean;
  /* Data source for autocomplete  (Rappider Schema String[]) */
  @Input() dataSource: AutocompleteDataSource;
  /* Whether active first option by default */
  @Input() defaultActiveFirstOption: boolean;
  /* Class name of the dropdown root element */
  @Input() overlayClassName: string;
  /* Style of the dropdown root element */
  @Input() overlayStyle: object;
  /* bind ngModel of the trigger element */
  @Input() value: any;
  /* textbox placeholder */
  @Input() placeholder: string;
  @Input() borderSettings: BorderConfig;
  @Input() sizeSettings: SizeConfig;
  @Input() colorSettings: ColorConfig;
  @Input() boxShadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;
  @Input() typographySettings: TypographyConfig;

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  onBlur() {
    this.blur.emit(this.value);
  }

  onTextboxValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
