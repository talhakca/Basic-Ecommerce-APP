import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';
import { CardSevenButtonOutput } from '../../utils/card-seven/card-seven-button-output.interface';
import { ParagraphComponentConfig } from '../../utils/paragraph/paragraph-component-config.interface';
@Component({
  selector: 'rappider-card-seven',
  templateUrl: './card-seven.component.html',
  styleUrls: ['./card-seven.component.scss'],
})
export class RappiderCardSevenComponent {
  @Input() data: any;
  /* card's image */
  @Input() image: ImageComponentConfig;
  /* author's name */
  @Input() authorName: TextComponentConfig;
  /* card description */
  @Input() description: ParagraphComponentConfig;
  /* heading */
  @Input() heading: HeadingComponentConfig;
  /* avatar */
  @Input() avatar: AvatarComponentConfig;
  /* button */
  @Input() button: ButtonComponentConfig;
  /*  date */
  @Input() date = Date();

  @Output() buttonClick = new EventEmitter<CardSevenButtonOutput>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit({ button: button, data: this.data });
  }
}
