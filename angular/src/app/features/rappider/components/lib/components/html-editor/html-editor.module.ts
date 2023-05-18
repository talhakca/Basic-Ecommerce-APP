import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHtmlEditorComponent } from './html-editor.component';
import { FormsModule } from '@angular/forms';
import { RappiderModalModule } from '../modal/modal.module';
import { RappiderRichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';
import { RappiderCodeEditorModule } from '../code-editor/code-editor.module';

@NgModule({
  declarations: [RappiderHtmlEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderModalModule,
    RappiderCodeEditorModule,
    RappiderRichTextEditorModule,
  ],
  exports: [RappiderHtmlEditorComponent],
})
export class RappiderHtmlEditorModule {}
