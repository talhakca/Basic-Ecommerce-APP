import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTitleComponent } from './title.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderTitleComponent],
  imports: [
    CommonModule,
    NzSkeletonModule,
    TranslateModule,
    RappiderTextModule,
  ],
  exports: [RappiderTitleComponent],
})
export class RappiderTitleModule {}
