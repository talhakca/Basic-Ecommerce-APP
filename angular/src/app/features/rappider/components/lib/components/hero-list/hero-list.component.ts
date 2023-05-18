import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';
import { HeroComponentConfig } from '../../utils/hero/hero-component-config.interface';

@Component({
  selector: 'rappider-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class RappiderHeroListComponent {
  @Input() items: HeroComponentConfig[];
  @Input() gap: string;
  @Input() titles: HeadingComponentConfig[];
  @Input() button: ButtonComponentConfig;

  @Output() buttonConfirm = new EventEmitter();
  @Output() cardConfirm = new EventEmitter();

  onButtonConfirm() {
    this.buttonConfirm.emit();
  }

  onCardConfirm() {
    this.cardConfirm.emit();
  }
}
