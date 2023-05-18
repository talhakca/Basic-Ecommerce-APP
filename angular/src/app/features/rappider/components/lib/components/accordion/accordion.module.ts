import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAccordionComponent } from './accordion.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderAccordionComponent],
  imports: [
    CommonModule,
    NzCollapseModule,
    RappiderTextModule,
    RappiderHeadingModule,
  ],
  exports: [RappiderAccordionComponent],
})
export class RappiderAccordionModule {}
