import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProfileCardTwoComponent } from './profile-card-two.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [RappiderProfileCardTwoComponent],
  imports: [
    CommonModule,
    RappiderIconModule,
    RappiderImageModule,
    RappiderHeadingModule,
    NzBadgeModule,
  ],
  exports: [RappiderProfileCardTwoComponent],
})
export class RappiderProfileCardTwoModule {}
