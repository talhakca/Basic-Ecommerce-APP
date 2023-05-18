import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderAlertComponent } from './alert.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderAlertComponent],
  exports: [RappiderAlertComponent],
  imports: [
    CommonModule,
    NzAlertModule,
    TranslateModule,
    RappiderButtonModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
})
export class RappiderAlertModule {}
