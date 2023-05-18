import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderListWrapperComponent } from './list-wrapper.component';
import { Routes } from '@angular/router';
import { RappiderListGridModule } from '../list-grid/list-grid.module';
import { RappiderTitleToolbarModule } from '../title-toolbar/title-toolbar.module';
import { RappiderInputGroupModule } from '../input-group/input-group.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { RappiderCardCcsModule } from '../card-ccs/card-ccs.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RappiderListWrapperComponent],
  imports: [
    CommonModule,
    RappiderListGridModule,
    RappiderTitleToolbarModule,
    RappiderInputGroupModule,
    NzEmptyModule,
    RappiderCardCcsModule,
    FormsModule,
  ],
  exports: [RappiderListWrapperComponent],
})
export class RappiderListWrapperModule {}
