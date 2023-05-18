import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderPricingPlanComponent } from './pricing-plan.component';
import { RappiderDividerModule } from '../divider/divider.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderPricingPlanComponent],
  imports: [
    CommonModule,
    RappiderDividerModule,
    RappiderButtonModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderPricingPlanComponent],
})
export class RappiderPricingPlanModule {}
