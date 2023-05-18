import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCartPreviewComponent } from './cart-preview.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RappiderCartItemModule } from '../cart-item/cart-item.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderButtonModule } from '../button/button.module';

@NgModule({
  declarations: [RappiderCartPreviewComponent],
  imports: [
    CommonModule,
    NzDropDownModule,
    NzButtonModule,
    NzIconModule,
    RappiderCartItemModule,
    RappiderTextModule,
    RappiderButtonModule,
  ],
  exports: [RappiderCartPreviewComponent],
})
export class RappiderCartPreviewModule {}
