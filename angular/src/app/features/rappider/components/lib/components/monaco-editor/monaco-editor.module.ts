import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { NzTabsModule } from 'ng-zorro-antd/tabs';

import {
  MONACO_EDITOR_CONFIG,
  MonacoEditorConfig,
} from './monaco-editor.config';
import { MonacoDiffEditorComponent } from './components/monaco-diff-editor/monaco-diff-editor.component';
import { MonacoEditorComponent } from './components/monaco-editor/monaco-editor.component';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RappiderRadioGroupModule],
  declarations: [
    // MonacoDiffEditorComponent,
    MonacoEditorComponent,
  ],
  exports: [
    MonacoEditorComponent,
    // MonacoDiffEditorComponent
  ],
})
export class RappiderMonacoEditorModule {
  public static forRoot(
    config: MonacoEditorConfig = {}
  ): ModuleWithProviders<RappiderMonacoEditorModule> {
    return {
      ngModule: RappiderMonacoEditorModule,
      providers: [{ provide: MONACO_EDITOR_CONFIG, useValue: config }],
    };
  }
}
