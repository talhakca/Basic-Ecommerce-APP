import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderSpacingComponent } from './spacing.component';
import { RappiderDimensionSelectModule } from '../dimension-select/dimension-select.module';
import { RappiderSwitchModule } from '../switch/switch.module';
import { RappiderButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RappiderTextboxModule } from '../textbox/textbox.module';

@NgModule({
  declarations: [RappiderSpacingComponent],
  imports: [
    CommonModule,
    RappiderDimensionSelectModule,
    RappiderSwitchModule,
    RappiderButtonModule,
    FormsModule,
    NzToolTipModule,
    RappiderTextboxModule,
  ],
  exports: [RappiderSpacingComponent],
})
export class RappiderSpacingModule {}
