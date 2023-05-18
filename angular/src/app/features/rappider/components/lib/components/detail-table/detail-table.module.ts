import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderDetailTableComponent } from './detail-table.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderDetailTableComponent],
  imports: [CommonModule, RappiderTextModule],
  exports: [RappiderDetailTableComponent],
})
export class RappiderDetailTableModule {}
