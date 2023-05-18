import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-card-thirteen',
  templateUrl: './card-thirteen.component.html',
  styleUrls: ['./card-thirteen.component.scss'],
})
export class RappiderCardThirteenComponent implements OnInit, OnChanges {
  @Input() backgroundImage: ImageComponentConfig;
  @Input() titleContent: HeadingComponentConfig;
  @Input() subtitle: HeadingComponentConfig;
  @Input() additionalContent: TextComponentConfig;

  url: string;

  ngOnInit(): void {
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
    return this.backgroundImage ? `url(${this.backgroundImage?.source})` : null;
  }
}
