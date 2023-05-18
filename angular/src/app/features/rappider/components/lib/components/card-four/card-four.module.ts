import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderCardFourComponent } from './card-four.component';

@NgModule({
  declarations: [RappiderCardFourComponent],
  imports: [CommonModule, NzCardModule, RappiderAvatarModule],
  exports: [RappiderCardFourComponent],
})
export class RappiderCardFourModule {}
