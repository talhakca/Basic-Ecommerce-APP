import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-banner-split',
  templateUrl: './banner-split.component.html',
  styleUrls: ['./banner-split.component.scss'],
})
export class RappiderBannerSplitComponent implements OnInit, OnChanges {
  /* title for bannersplit can take inner html */
  @Input() title: HeadingComponentConfig;
  /* content for bannersplit can take inner html */
  @Input() content: string;
  /* button for bannersplit */
  @Input() button: ButtonComponentConfig;
  /* image source url */
  @Input() backgroundImageUrl: string;
  /* width for bannersplit */
  @Input() width: string;
  @Input() backgroundColor: string;

  url: string;

  ngOnInit(): void {
    /* change the background image */
    this.setUrlForBackgroundImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    /* checks if the background image changed */
    if (changes.backgroundImageUrl) {
      /* change the background image */
      this.setUrlForBackgroundImage();
    }
  }

  setUrlForBackgroundImage() {
    this.url = this.backgroundImageUrl
      ? `url(${this.backgroundImageUrl})`
      : null;
  }
}
