import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderSubscribeSourceComponent } from './subscribe-source.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderInputGroupModule } from '../input-group/input-group.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';

@NgModule({
  declarations: [RappiderSubscribeSourceComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    NzInputModule,
    FormsModule,
    RappiderInputGroupModule,
    RappiderHeadingModule,
    RappiderParagraphModule,
  ],
  exports: [RappiderSubscribeSourceComponent],
})
export class RappiderSubscribeSourceModule {}
