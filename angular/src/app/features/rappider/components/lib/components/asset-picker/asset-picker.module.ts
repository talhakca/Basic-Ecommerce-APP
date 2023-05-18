import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAssetPickerComponent } from './asset-picker.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { RappiderIconModule } from '../icon/icon.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RappiderButtonModule } from '../button/button.module';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderModalModule } from '../modal/modal.module';
import { RappiderAssetBrowserModule } from '../asset-browser/asset-browser.module';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [RappiderAssetPickerComponent],
  imports: [
    CommonModule,
    NzTreeModule,
    RappiderIconModule,
    NzBreadCrumbModule,
    RappiderButtonModule,
    TranslateModule,
    RappiderModalModule,
    RappiderAssetBrowserModule,
    NzToolTipModule,
  ],
  exports: [RappiderAssetPickerComponent],
})
export class RappiderAssetPickerModule {}
