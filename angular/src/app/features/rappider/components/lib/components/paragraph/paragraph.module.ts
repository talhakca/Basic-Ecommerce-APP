import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderParagraphComponent } from './paragraph.component';
import { RappiderTextModule } from '../text/text.module';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderTextboxModule } from '../textbox/textbox.module';

@NgModule({
  declarations: [RappiderParagraphComponent],
  imports: [
    CommonModule,
    RappiderTextModule,
    TranslateModule,
    RappiderTextboxModule,
  ],
  exports: [RappiderParagraphComponent],
})
export class RappiderParagraphModule {}
