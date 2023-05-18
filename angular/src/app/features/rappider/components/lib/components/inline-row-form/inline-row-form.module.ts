import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderInlineRowFormComponent } from './inline-row-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderInputErrorModule } from '../input-error/input-error.module';
import { RappiderInputTemplateModule } from '../input-template/input-template.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderInlineRowFormComponent],
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
    RappiderButtonModule,
    RappiderTextModule,
  ],
  exports: [RappiderInlineRowFormComponent],
})
export class RappiderInlineRowFormModule {}
