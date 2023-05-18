import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridBuilderComponent } from './grid-builder/grid-builder.component';
import { RappiderListGridModule } from '../list-grid/list-grid.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { GridBuilderColumnsComponent } from './grid-builder-columns/grid-builder-columns.component';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { FormsModule } from '@angular/forms';
import { RappiderModalModule } from '../modal/modal.module';
import { RappiderSwitchModule } from '../switch/switch.module';
import { RappiderButtonModule } from '../button/button.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RappiderNumberInputModule } from '../number-input/number-input.module';
import { ActionsInputComponent } from './actions-input/actions-input.component';

@NgModule({
  declarations: [
    GridBuilderComponent,
    GridBuilderColumnsComponent,
    ActionsInputComponent,
  ],
  imports: [
    CommonModule,
    NzTabsModule,
    FormsModule,
    RappiderListGridModule,
    RappiderModalModule,
    RappiderTextboxModule,
    RappiderSelectModule,
    RappiderSwitchModule,
    RappiderButtonModule,
    DragDropModule,
    RappiderNumberInputModule,
  ],
  exports: [GridBuilderComponent],
})
export class RappiderGridBuilderModule {}
