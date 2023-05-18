import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardOneListComponent } from './card-one-list.component';
import { RappiderCardOneModule } from '../card-one/card-one.module';

@NgModule({
  declarations: [RappiderCardOneListComponent],
  imports: [CommonModule, RappiderCardOneModule],
  exports: [RappiderCardOneListComponent],
})
export class RappiderCardOneListModule {}
