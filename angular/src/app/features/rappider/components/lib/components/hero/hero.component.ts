import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';
import {
  HeroHorizontalContentPlacement,
  HeroVerticalContentPlacement,
} from '../../utils/hero';
import { ImageComponentConfig } from '../../utils/image';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class RappiderHeroComponent {
  /* image for background */
  @Input() backgroundImage: ImageComponentConfig;
  /* line's background color class */
  @Input() lineBackgroundColor: string;
  /* line's width */
  @Input() lineWidth = '50px';
  /* line's height */
  @Input() lineHeight = '3px';
  /* hero's content can take inner html */
  @Input() content: TextComponentConfig;
  /* hero's title can take inner html */
  @Input() title: HeadingComponentConfig;
  /* hero's button */
  @Input() button: ButtonComponentConfig;
  /* hero's content horizontal placement */
  @Input() horizontalContentPlacement: HeroHorizontalContentPlacement;
  /* hero's content vertical placement */
  @Input() verticalContentPlacement: HeroVerticalContentPlacement;

  /* button click trigger */
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
