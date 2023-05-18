import { Component, Input, OnInit } from '@angular/core';
import { TitleImageOverflowMode } from '../../utils/title-image/title-image-overflow-mode-enum';
import { TitleImageItem } from '../../utils/title-image/title-image-item.interface';

@Component({
  selector: 'rappider-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.scss'],
})
export class RappiderTitleImageComponent {
  /* title image item */
  @Input() items: TitleImageItem[];
  @Input() overflowMode: TitleImageOverflowMode;

  setOverflowMode() {
    switch (this.overflowMode) {
      case TitleImageOverflowMode.Hidden:
        return 'overflow:hidden';
      case TitleImageOverflowMode.Visible:
        return 'overflow:visible';
      default:
        return 'overflow:hidden';
    }
  }
}
