import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderNumberInputComponent } from './number-input.component';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
  declarations: [RappiderNumberInputComponent],
  imports: [CommonModule, FormsModule, NzInputNumberModule],
  exports: [RappiderNumberInputComponent],
})
export class RappiderNumberInputModule {}
