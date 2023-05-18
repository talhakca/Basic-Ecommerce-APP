import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderDataBinderComponent } from './data-binder.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  declarations: [RappiderDataBinderComponent],
  imports: [CommonModule, FormsModule, NzInputModule, NzAutocompleteModule],
  exports: [RappiderDataBinderComponent],
})
export class RappiderDataBinderModule {}
