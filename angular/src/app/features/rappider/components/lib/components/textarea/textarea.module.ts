import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderTextareaComponent } from './textarea.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderTextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    TranslateModule,
    RappiderTextModule,
  ],
  exports: [RappiderTextareaComponent],
})
export class RappiderTextareaModule {}
