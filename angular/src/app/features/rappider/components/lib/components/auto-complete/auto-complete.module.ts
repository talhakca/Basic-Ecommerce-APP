import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAutoCompleteComponent } from './auto-complete.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [RappiderAutoCompleteComponent],
  imports: [CommonModule, NzAutocompleteModule, FormsModule, NzInputModule],
  exports: [RappiderAutoCompleteComponent],
})
export class RappiderAutoCompleteModule {}
