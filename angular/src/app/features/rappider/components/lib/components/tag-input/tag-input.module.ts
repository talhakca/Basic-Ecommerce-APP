import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { RappiderTagInputComponent } from './tag-input.component';

@NgModule({
  declarations: [RappiderTagInputComponent],
  imports: [CommonModule, NzSelectModule, FormsModule],
  exports: [RappiderTagInputComponent],
})
export class RappiderTagInputModule {}
