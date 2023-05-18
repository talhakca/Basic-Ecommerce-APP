import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderReviewResultsComponent } from './review-results.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { RappiderProgressModule } from '../progress/progress.module';

@NgModule({
  declarations: [RappiderReviewResultsComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderRateDisplayModule,
    RappiderProgressModule,
  ],
  exports: [RappiderReviewResultsComponent],
})
export class RappiderReviewResultsModule {}
