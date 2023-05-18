import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTabComponent } from './tab.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderTabComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    NzIconModule,
    RappiderIconModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [RappiderTabComponent],
})
export class RappiderTabModule {}
