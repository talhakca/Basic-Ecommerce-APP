import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderRateComponent } from './rate.component';
import { FormsModule } from '@angular/forms';
import { NzRateModule } from 'ng-zorro-antd/rate';

@NgModule({
  declarations: [RappiderRateComponent],
  imports: [CommonModule, FormsModule, NzRateModule],
  exports: [RappiderRateComponent],
})
export class RappiderRateModule {}
