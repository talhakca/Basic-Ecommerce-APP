import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderJsonArrayComponent } from './json-array.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { RappiderModalModule } from '../modal/modal.module';

import { RappiderListGridModule } from '../list-grid/list-grid.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';
import { RappiderCodeEditorModule } from '../code-editor/code-editor.module';
import { RappiderSpinModule } from '../spin/spin.module';

@NgModule({
  declarations: [RappiderJsonArrayComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    RappiderModalModule,
    RappiderCodeEditorModule,
    RappiderListGridModule,
    TranslateModule,
    ReactiveFormsModule,
    RappiderButtonModule,
    RappiderRadioGroupModule,
    RappiderSpinModule,
  ],
  exports: [RappiderJsonArrayComponent],
})
export class RappiderJsonArrayModule {}
