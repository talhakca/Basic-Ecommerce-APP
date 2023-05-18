import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { RappiderBadgeComponent } from './badge.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderBadgeComponent],
  imports: [
    CommonModule,
    NzBadgeModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [RappiderBadgeComponent],
})
export class RappiderBadgeModule {}
