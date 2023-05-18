import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProductPreviewCardComponent } from './product-preview-card.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RappiderProductPreviewCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    RappiderHeadingModule,
    RappiderImageModule,
    RappiderParagraphModule,
    RappiderIconModule,
  ],
  exports: [RappiderProductPreviewCardComponent],
})
export class RappiderProductPreviewCardModule {}
