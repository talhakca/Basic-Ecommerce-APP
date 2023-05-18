import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTextboxComponent } from './textbox.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [RappiderTextboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzMentionModule,
    TranslateModule,
    NgxMaskModule.forChild(),
  ],
  exports: [RappiderTextboxComponent],
})
export class RappiderTextboxModule {}
