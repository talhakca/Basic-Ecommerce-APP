import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderDeliveredProductDetailComponent } from './delivered-product-detail.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderDividerModule } from '../divider/divider.module';

@NgModule({
  declarations: [RappiderDeliveredProductDetailComponent],
  imports: [
    CommonModule,
    RappiderImageModule,
    RappiderTextModule,
    RappiderRateDisplayModule,
    RappiderButtonModule,
    RappiderDividerModule,
  ],
  exports: [RappiderDeliveredProductDetailComponent],
})
export class RappiderDeliveredProductDetailModule {}
