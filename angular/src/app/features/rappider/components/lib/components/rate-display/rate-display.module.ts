import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { RappiderRateDisplayComponent } from './rate-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RappiderRateDisplayComponent],
  imports: [CommonModule, NzRateModule, FormsModule],
  exports: [RappiderRateDisplayComponent],
})
export class RappiderRateDisplayModule {}
