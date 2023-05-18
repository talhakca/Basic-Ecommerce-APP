import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderRowFormComponent } from './row-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderInputErrorModule } from '../input-error/input-error.module';
import { RappiderInputTemplateModule } from '../input-template/input-template.module';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';

@NgModule({
  declarations: [RappiderRowFormComponent],
  exports: [RappiderRowFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
    NzInputModule,
    NzButtonModule,
    RappiderInputErrorModule,
    RappiderInputTemplateModule,
    NzPopconfirmModule,
    RappiderButtonModule,
    RappiderTextModule,
    RappiderHeadingModule,
    RappiderTextboxModule,
  ],
})
export class RappiderRowFormModule {}
