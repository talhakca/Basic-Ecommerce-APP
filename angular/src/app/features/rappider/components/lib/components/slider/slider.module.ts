import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderSliderComponent } from './slider.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@NgModule({
  declarations: [RappiderSliderComponent],
  imports: [CommonModule, FormsModule, NzSliderModule],
  exports: [RappiderSliderComponent],
})
export class RappiderSliderModule {}
