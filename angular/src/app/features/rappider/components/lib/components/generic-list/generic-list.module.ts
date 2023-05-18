import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderGenericListComponent } from './generic-list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { FormatDateModule } from '../../utils';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderGenericListComponent],
  imports: [
    CommonModule,
    NzListModule,
    TranslateModule,
    FormatDateModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [RappiderGenericListComponent],
})
export class RappiderGenericListModule {}
