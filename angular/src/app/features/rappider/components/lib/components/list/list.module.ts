import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderListComponent } from './list.component';
import { RappiderCardListModule } from '../card-list/card-list.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RappiderListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderCardListModule,
    RappiderTextboxModule,
  ],
  exports: [RappiderListComponent],
})
export class RappiderListModule {}
