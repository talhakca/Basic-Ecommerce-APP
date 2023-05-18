import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardThirteenComponent } from './card-thirteen.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderCardThirteenComponent],
  imports: [
    CommonModule,
    NzCardModule,
    RappiderTextModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderCardThirteenComponent],
})
export class RappiderCardThirteenModule {}
