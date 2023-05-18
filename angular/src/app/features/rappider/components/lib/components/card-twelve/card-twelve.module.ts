import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardTwelveComponent } from './card-twelve.component';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';

@NgModule({
  declarations: [RappiderCardTwelveComponent],
  imports: [
    CommonModule,
    RappiderIconModule,
    RappiderHeadingModule,
    RappiderParagraphModule,
  ],
  exports: [RappiderCardTwelveComponent],
})
export class RappiderCardTwelveModule {}
