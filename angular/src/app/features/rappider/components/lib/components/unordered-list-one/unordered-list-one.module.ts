import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderUnorderedListOneComponent } from './unordered-list-one.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderUnorderedListOneComponent],
  imports: [
    CommonModule,
    RappiderIconModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [RappiderUnorderedListOneComponent],
})
export class RappiderUnorderedListOneModule {}
