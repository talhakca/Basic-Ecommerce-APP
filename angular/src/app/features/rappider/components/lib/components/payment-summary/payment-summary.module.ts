import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RappiderPaymentSummaryComponent } from './payment-summary.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderDividerModule } from '../divider/divider.module';

@NgModule({
  declarations: [RappiderPaymentSummaryComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderHeadingModule,
    RappiderIconModule,
    RappiderTextModule,
    RappiderButtonModule,
    RappiderDividerModule,
  ],
  exports: [RappiderPaymentSummaryComponent],
})
export class RappiderPaymentSummaryModule {}
