import { Component, Input } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'rappider-lottie-player',
  templateUrl: './lottie-player.component.html',
  styleUrls: ['./lottie-player.component.scss'],
})
export class RappiderLottiePlayerComponent {
  @Input() options: AnimationOptions;
  @Input() width: string;
  @Input() height: string;
  @Input() styles: Partial<CSSStyleDeclaration>;
  @Input() containerClass: string;
}
