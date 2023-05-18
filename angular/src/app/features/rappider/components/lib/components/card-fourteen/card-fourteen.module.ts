import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardFourteenComponent } from './card-fourteen.component';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderHtmlViewerModule } from '../html-viewer/html-viewer.module';
import { RappiderIconTextModule } from '../icon-text/icon-text.module';
import { RappiderIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RappiderCardFourteenComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderHtmlViewerModule,
    RappiderIconTextModule,
    RappiderIconModule,
  ],
  exports: [RappiderCardFourteenComponent],
})
export class RappiderCardFourteenModule {}
