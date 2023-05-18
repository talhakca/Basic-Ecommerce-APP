import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCodemirrorInputFormComponent } from './codemirror-input-form.component';
import { RappiderButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';
import { RappiderCodeEditorModule } from '../code-editor/code-editor.module';

@NgModule({
  declarations: [RappiderCodemirrorInputFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderCodeEditorModule,
    RappiderButtonModule,
  ],
  exports: [RappiderCodemirrorInputFormComponent],
})
export class RappiderCodemirrorInputFormModule {}
