import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderUserBlockComponent } from './user-block.component';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [RappiderUserBlockComponent],
  imports: [CommonModule, RappiderAvatarModule, RappiderHeadingModule],
  exports: [RappiderUserBlockComponent],
})
export class RappiderUserBlockModule {}
