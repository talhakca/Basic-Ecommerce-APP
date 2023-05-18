import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderUnorderedListOneArrayComponent } from './unordered-list-one-array.component';
import { RappiderUnorderedListOneModule } from '../unordered-list-one/unordered-list-one.module';

@NgModule({
  declarations: [RappiderUnorderedListOneArrayComponent],
  imports: [CommonModule, RappiderUnorderedListOneModule],
  exports: [RappiderUnorderedListOneArrayComponent],
})
export class RappiderUnorderedListOneArrayModule {}
