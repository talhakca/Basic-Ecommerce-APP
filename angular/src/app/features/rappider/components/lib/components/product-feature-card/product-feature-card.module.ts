import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProductFeatureCardComponent } from './product-feature-card.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';

@NgModule({
  declarations: [RappiderProductFeatureCardComponent],
  imports: [
    CommonModule,
    RappiderImageModule,
    RappiderTextModule,
    RappiderHeadingModule,
    RappiderRateDisplayModule,
  ],
  exports: [RappiderProductFeatureCardComponent],
})
export class RappiderProductFeatureCardModule {}
