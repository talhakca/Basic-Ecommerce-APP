import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconBlockComponent } from './icon-block.component';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';

@NgModule({
  declarations: [RappiderIconBlockComponent],
  imports: [
    CommonModule,
    RappiderAvatarModule,
    RappiderHeadingModule,
    RappiderTextModule,
  ],
  exports: [RappiderIconBlockComponent],
})
export class RappiderIconBlockModule {}
