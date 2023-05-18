import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardsComponent } from './cards.component';
import { RappiderTitleToolbarModule } from '../title-toolbar/title-toolbar.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { RappiderCardOneListModule } from '../card-one-list/card-one-list.module';
import { RappiderInputGroupModule } from '../input-group/input-group.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { RappiderPaginationModule } from '../pagination/pagination.module';
import { RappiderSelectModule } from '../select/select.module';
@NgModule({
  declarations: [RappiderCardsComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    FormsModule,
    RappiderTitleToolbarModule,
    RappiderCardOneListModule,
    RappiderInputGroupModule,
    NzSkeletonModule,
    RappiderPaginationModule,
    RappiderSelectModule,
  ],
  exports: [RappiderCardsComponent],
})
export class RappiderCardsModule {}
