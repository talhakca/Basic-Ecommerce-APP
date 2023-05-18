import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderColorPickerComponent } from './color-picker.component';
import { RappiderButtonModule } from '../button/button.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [RappiderColorPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    RappiderButtonModule,
    NzInputModule,
    ColorPickerModule,
    TranslateModule,
  ],
  exports: [RappiderColorPickerComponent],
})
export class RappiderColorPickerModule {}
