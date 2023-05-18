import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardElevenComponent } from './card-eleven.component';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderBadgeModule } from '../badge/badge.module';

@NgModule({
  declarations: [RappiderCardElevenComponent],
  imports: [
    CommonModule,
    RappiderParagraphModule,
    RappiderTextModule,
    RappiderBadgeModule,
  ],
  exports: [RappiderCardElevenComponent],
})
export class RappiderCardElevenModule {}
