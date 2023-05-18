import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderCardTenComponent } from './card-ten.component';

@NgModule({
  declarations: [RappiderCardTenComponent],
  imports: [
    CommonModule,
    RappiderHeadingModule,
    RappiderButtonModule,
    RappiderTextModule,
  ],
  exports: [RappiderCardTenComponent],
})
export class RappiderCardTenModule {}
