import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderChatOneComponent } from './chat-one.component';
import { RappiderLabelModule } from '../label/label.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderAvatarModule } from '../avatar/avatar.module';
import { RappiderInputGroupModule } from '../input-group/input-group.module';

@NgModule({
  declarations: [RappiderChatOneComponent],
  imports: [
    CommonModule,
    RappiderLabelModule,
    RappiderTextModule,
    RappiderAvatarModule,
    RappiderInputGroupModule,
  ],
  exports: [RappiderChatOneComponent],
})
export class RappiderChatOneModule {}
