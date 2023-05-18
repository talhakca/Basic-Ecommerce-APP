import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderAssetBrowserComponent } from './asset-browser.component';

@NgModule({
  declarations: [RappiderAssetBrowserComponent],
  imports: [
    CommonModule,
    NzTreeModule,
    RappiderIconModule,
    NzBreadCrumbModule,
    RappiderButtonModule,
    TranslateModule,
  ],
  exports: [RappiderAssetBrowserComponent],
})
export class RappiderAssetBrowserModule {}
