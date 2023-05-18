import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { AvatarPlacement } from '../../utils/card-one/card-one-avatar-placement.enum';
import { CardOneButtonOutput } from '../../utils/card-one/card-one-button-output.interface';
import { CardOneImagePosition } from '../../utils/card-one/card-one-image-position.enum';
import { DividerComponentConfig } from '../../utils/divider';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { IconComponentConfig, IconType } from '../../utils/icon';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { ParagraphComponentConfig } from '../../utils/paragraph/paragraph-component-config.interface';
import { TagComponentConfig } from '../../utils/tag';
import { Tag } from '../../utils/tag/tag.interface';

@Component({
  selector: 'rappider-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss'],
})
export class RappiderCardOneComponent implements OnInit, OnChanges {
  /* data to emit */
  @Input() data: any;
  @Input() imagePosition: CardOneImagePosition;
  @Input() image: ImageComponentConfig;
  @Input() imageTags: Tag[];
  @Input() imageButtons: ButtonComponentConfig[];
  @Input() rate: number;
  @Input() titles: HeadingComponentConfig[];
  @Input() currency: string;
  @Input() finalPrice: number;
  @Input() price: number;
  @Input() additionalTags: TagComponentConfig[];
  @Input() additionalButtons: ButtonComponentConfig[];
  @Input() descriptions: ParagraphComponentConfig[];
  @Input() avatar: AvatarComponentConfig;
  @Input() avatarButton: ButtonComponentConfig;
  @Input() avatarPlacement: AvatarPlacement;
  @Input() isSelected: boolean;
  @Input() selectedCardIcon: IconComponentConfig;
  @Input() divider: DividerComponentConfig;
  @Input() showTitleOnImage = false;
  @Input() showDescriptionOnImage: boolean;

  @Output() cardClick = new EventEmitter();
  @Output() imageButtonClick = new EventEmitter<CardOneButtonOutput>();
  @Output() additionalButtonClick = new EventEmitter<CardOneButtonOutput>();

  AvatarPlacement = AvatarPlacement;

  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.selectedCardIcon) {
      this.selectedCardIcon = {
        name: 'fa-solid fa-circle-check',
        type: IconType.FontAwesome,
      };
    }
    if (this.isSelected == null) {
      this.isSelected = false;
    }
  }

  onCardClick() {
    this.cardClick.emit({ data: this.data });
  }

  onImageButtonClick(button: ButtonComponentConfig, event) {
    event.stopPropagation();
    this.imageButtonClick.emit({ button: button, data: this.data });
  }

  onAdditionalButtonClick(button: ButtonComponentConfig, event) {
    event.stopPropagation();
    this.additionalButtonClick.emit({ button: button, data: this.data });
  }

  setImagePositionClass() {
    switch (this.imagePosition) {
      case CardOneImagePosition.Top: {
        return 'image-position-top';
      }
      case CardOneImagePosition.Right: {
        return 'image-position-right';
      }
      case CardOneImagePosition.Left: {
        return 'image-position-left';
      }
      case CardOneImagePosition.Bottom: {
        return 'image-position-bottom';
      }
      default:
        break;
    }
  }
}
