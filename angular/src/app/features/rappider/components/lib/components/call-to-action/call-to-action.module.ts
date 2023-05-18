import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCallToActionComponent } from './call-to-action.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';

@NgModule({
  declarations: [RappiderCallToActionComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderHeadingModule,
    RappiderParagraphModule,
  ],
  exports: [RappiderCallToActionComponent],
})
export class RappiderCallToActionModule {}
