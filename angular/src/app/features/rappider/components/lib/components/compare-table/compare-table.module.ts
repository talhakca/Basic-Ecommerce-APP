import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCompareTableComponent } from './compare-table.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RappiderImageModule } from '../image/image.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderCompareTableComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    NzTableModule,
    RappiderTextModule,
    RappiderImageModule,
  ],
  exports: [RappiderCompareTableComponent],
})
export class RappiderCompareTableModule {}
