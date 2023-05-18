import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RappiderProductRecommendationsComponent } from './product-recommendations.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { RappiderLabelModule } from '../label/label.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderProductRecommendationsComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderImageModule,
    NzCardModule,
    RappiderHeadingModule,
    RappiderRateDisplayModule,
    RappiderLabelModule,
    RappiderParagraphModule,
    RappiderButtonModule,
  ],
  exports: [RappiderProductRecommendationsComponent],
})
export class RappiderProductRecommendationsModule {}
