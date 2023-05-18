import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderDimensionSelectComponent } from './dimension-select.component';
import { RappiderNumberInputModule } from '../number-input/number-input.module';
import { RappiderSelectModule } from '../select/select.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderTextboxModule } from '../textbox/textbox.module';

@NgModule({
  declarations: [RappiderDimensionSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderNumberInputModule,
    RappiderSelectModule,
    NzInputModule,
    RappiderTextboxModule,
  ],
  exports: [RappiderDimensionSelectComponent],
})
export class RappiderDimensionSelectModule {}
