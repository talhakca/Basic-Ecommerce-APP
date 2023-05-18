import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProductOneListComponent } from './product-one-list.component';
import { RappiderProductOneModule } from '../product-one/product-one.module';

@NgModule({
  declarations: [RappiderProductOneListComponent],
  imports: [CommonModule, RappiderProductOneModule],
  exports: [RappiderProductOneListComponent],
})
export class RappiderProductOneListModule {}
