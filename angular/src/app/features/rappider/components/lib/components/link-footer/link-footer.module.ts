import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderLinkFooterComponent } from './link-footer.component';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';
import { RouterModule } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [RappiderLinkFooterComponent],
  imports: [
    CommonModule,
    RappiderButtonModule,
    RappiderHeadingModule,
    RappiderTextModule,
    RouterModule,
    NzTypographyModule,
  ],
  exports: [RappiderLinkFooterComponent],
})
export class RappiderLinkFooterModule {}
