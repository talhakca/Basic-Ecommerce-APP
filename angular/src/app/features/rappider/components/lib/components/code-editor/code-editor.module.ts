import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCodeEditorComponent } from './code-editor.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderCodeEditorComponent],
  imports: [CommonModule, FormsModule, CodemirrorModule, RappiderButtonModule],
  exports: [RappiderCodeEditorComponent],
})
export class RappiderCodeEditorModule {}
