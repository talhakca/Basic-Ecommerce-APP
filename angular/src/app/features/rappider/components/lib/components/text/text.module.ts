import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTextComponent } from './text.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [RappiderTextComponent],
  imports: [CommonModule, TranslateModule, NzTypographyModule],
  exports: [RappiderTextComponent],
})
export class RappiderTextModule {}
