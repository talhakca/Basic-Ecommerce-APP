import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormatDateModule } from '../../utils';
import { RappiderCardListComponent } from './card-list.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderCardListComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzAvatarModule,
    NzGridModule,
    TranslateModule,
    FormatDateModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderCardListComponent],
})
export class RappiderCardListModule {}
