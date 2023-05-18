import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderRowSelectComponent } from './row-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderInputErrorModule } from '../input-error/input-error.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';

@NgModule({
  declarations: [RappiderRowSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
    NzInputModule,
    NzButtonModule,
    RappiderInputErrorModule,
    RappiderButtonModule,
    RappiderSelectModule,
    RappiderTextboxModule,
  ],
  exports: [RappiderRowSelectComponent],
})
export class RappiderRowSelectModule {}
