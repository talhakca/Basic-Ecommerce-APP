import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardEightComponent } from './card-eight.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderIconModule } from '../icon/icon.module';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [RappiderCardEightComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderHeadingModule,
    RappiderTextModule,
    RappiderButtonModule,
    RappiderIconModule,
  ],
  exports: [RappiderCardEightComponent],
})
export class RappiderCardEightModule {}
