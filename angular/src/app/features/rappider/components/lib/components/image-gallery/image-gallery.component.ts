import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  ButtonComponentConfig,
  defaultNextButton,
  defaultPreviousButton,
  ImageComponentConfig,
  ThumbnailTriggerType,
} from '../../utils';

@Component({
  selector: 'rappider-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class RappiderImageGalleryComponent implements OnInit, OnChanges {
  @Input() images: ImageComponentConfig[];
  @Input() previousButton: ButtonComponentConfig;
  @Input() nextButton: ButtonComponentConfig;
  @Input() thumbnailTriggerType: ThumbnailTriggerType;

  ThumbnailTriggerType = ThumbnailTriggerType;
  activeImage: ImageComponentConfig;

  ngOnInit(): void {
    this.setActiveImage();
    this.initDefaults();
  }

  ngOnChanges(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.previousButton) {
      this.previousButton = defaultPreviousButton;
    }
    if (!this.nextButton) {
      this.nextButton = defaultNextButton;
    }
    if (!this.thumbnailTriggerType) {
      this.thumbnailTriggerType = ThumbnailTriggerType.Hover;
    }
  }

  setActiveImage() {
    if (this.images) {
      this.activeImage = this.images[0];
    } else {
      this.activeImage = null;
    }
  }

  onClickGalleryImage(image: ImageComponentConfig) {
    this.activeImage = image;
  }

  onNextButtonClick() {
    const activeImageIndex = this.images.findIndex(
      (image) => image === this.activeImage
    );
    const nextImageIndex = activeImageIndex + 1;
    if (this.images.length > nextImageIndex) {
      this.activeImage = this.images[nextImageIndex];
    } else {
      this.activeImage = this.images[0];
    }
  }

  onPreviousButtonClick() {
    const activeImageIndex = this.images.findIndex(
      (image) => image === this.activeImage
    );
    const previousImageIndex = activeImageIndex - 1;
    if (previousImageIndex >= 0) {
      this.activeImage = this.images[previousImageIndex];
    } else {
      this.activeImage = this.images[this.images.length - 1];
    }
  }
}
