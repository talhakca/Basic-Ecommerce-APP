import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderStringArrayComponent } from './string-array.component';
import { FormsModule } from '@angular/forms';
import { RappiderInlineRowFormModule } from '../inline-row-form/inline-row-form.module';

@NgModule({
  declarations: [RappiderStringArrayComponent],
  imports: [CommonModule, FormsModule, RappiderInlineRowFormModule],
  exports: [RappiderStringArrayComponent],
})
export class RappiderStringArrayModule {}
