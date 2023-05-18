import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderNoteComponent } from './note.component';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';
import { RappiderRichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';

@NgModule({
  declarations: [RappiderNoteComponent],
  imports: [
    CommonModule,
    RappiderTagModule,
    RappiderHeadingModule,
    RappiderButtonModule,
    FormsModule,
    RappiderRichTextEditorModule,
  ],
  exports: [RappiderNoteComponent],
})
export class RappiderNoteModule {}
