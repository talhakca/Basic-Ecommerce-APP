import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderMediaPlayerComponent } from './media-player.component';
import { VimeModule } from '@vime/angular';

@NgModule({
  declarations: [RappiderMediaPlayerComponent],
  imports: [CommonModule, VimeModule],
  exports: [RappiderMediaPlayerComponent],
})
export class RappiderMediaPlayerModule {}
