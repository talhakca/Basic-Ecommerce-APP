import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderLottiePlayerComponent } from './lottie-player.component';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [RappiderLottiePlayerComponent],
  imports: [CommonModule, LottieModule],
  exports: [RappiderLottiePlayerComponent],
})
export class RappiderLottiePlayerModule {}
