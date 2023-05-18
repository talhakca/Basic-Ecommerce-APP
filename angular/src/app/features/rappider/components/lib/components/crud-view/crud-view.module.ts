import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCrudViewComponent } from './crud-view.component';
import { RappiderEditFormModule } from '../edit-form/edit-form.module';
import { RappiderListGridModule } from '../list-grid/list-grid.module';
import { FormsModule } from '@angular/forms';
import { RappiderTitleToolbarModule } from '../title-toolbar/title-toolbar.module';
import { RappiderCardCcsModule } from '../card-ccs/card-ccs.module';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { RappiderInputGroupModule } from '../input-group/input-group.module';

@NgModule({
  declarations: [RappiderCrudViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderTitleToolbarModule,
    RappiderListGridModule,
    RappiderEditFormModule,
    RappiderEditFormModule,
    RappiderCardCcsModule,
    RappiderInputGroupModule,
    NzEmptyModule,
  ],
  exports: [RappiderCrudViewComponent],
})
export class RappiderCrudViewModule {}
