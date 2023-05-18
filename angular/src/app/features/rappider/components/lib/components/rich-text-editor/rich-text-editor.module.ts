import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { RappiderRichTextEditorComponent } from './rich-text-editor.component';

@NgModule({
  declarations: [RappiderRichTextEditorComponent],
  imports: [CommonModule, FormsModule, QuillModule],
  exports: [RappiderRichTextEditorComponent],
})
export class RappiderRichTextEditorModule {}
