import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconComponent } from './icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RappiderIconComponent],
  imports: [CommonModule, TranslateModule, NzIconModule, MatIconModule],
  exports: [RappiderIconComponent],
})
export class RappiderIconModule {}
