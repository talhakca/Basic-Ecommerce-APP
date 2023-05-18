import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardNineComponent } from './card-nine.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderCardNineComponent],
  imports: [CommonModule, RappiderIconModule, RappiderTextModule],
  exports: [RappiderCardNineComponent],
})
export class RappiderCardNineModule {}
