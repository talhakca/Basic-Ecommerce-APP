import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderPaymentDetailsComponent } from './payment-details.component';
import { RappiderTextModule } from '../text/text.module';
import { RappiderImageModule } from '../image/image.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RouterModule } from '@angular/router';
import { RappiderDropdownMenuModule } from '../dropdown-menu/dropdown-menu.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderDividerModule } from '../divider/divider.module';

@NgModule({
  declarations: [RappiderPaymentDetailsComponent],
  imports: [
    CommonModule,
    RappiderTextModule,
    RappiderImageModule,
    RappiderButtonModule,
    RappiderHeadingModule,
    RouterModule,
    RappiderDropdownMenuModule,
    FormsModule,
    TranslateModule,
    NzDropDownModule,
    RappiderIconModule,
    RappiderDividerModule,
  ],
  exports: [RappiderPaymentDetailsComponent],
})
export class RappiderPaymentDetailsModule {}
