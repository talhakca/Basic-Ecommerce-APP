import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderLabelComponent } from './label.component';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderLabelComponent],
  imports: [CommonModule, RappiderTextModule],
  exports: [RappiderLabelComponent],
})
export class RappiderLabelModule {}
