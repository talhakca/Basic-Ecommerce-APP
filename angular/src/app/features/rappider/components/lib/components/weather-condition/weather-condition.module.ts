import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCardModule } from 'ng-zorro-antd/card';

import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderSliderModule } from '../slider/slider.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderWeatherConditionComponent } from './weather-condition.component';
import { RappiderDividerModule } from '../divider/divider.module';

@NgModule({
  declarations: [RappiderWeatherConditionComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderImageModule,
    RappiderIconModule,
    RappiderTextModule,
    RappiderSliderModule,
    RappiderButtonModule,
    NzCardModule,
    RappiderDividerModule,
  ],
  exports: [RappiderWeatherConditionComponent],
})
export class RappiderWeatherConditionModule {}
