import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DEFAULT_IMAGE_FALLBACK } from '../../utils/image/default-image-fallback.variable';
import {
  BorderConfig,
  BoxShadowConfig,
  SizeConfig,
  SpacingConfig,
} from '../../utils/shared';
import { TextComponentConfig } from '../../utils/text';

@Component({
  selector: 'rappider-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class RappiderImageComponent implements OnInit, OnChanges {
  /* image source data */
  @Input() source: string;
  /* alternate text for the image, if the image for some reason cannot be displayed */
  @Input() alternateText: string;
  /* width property */
  @Input() width: string;
  /* height property */
  @Input() height: string;
  /* displays placeholder's source */
  @Input() placeholder: string;
  /* load failure fault-tolerant image*/
  @Input() fallback: string;
  @Input() disablePreview: boolean;
  @Input() borderSettings: BorderConfig;
  @Input() customSizeSettings: SizeConfig;
  @Input() shadowSettings: BoxShadowConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;

  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges() {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.fallback) {
      this.fallback = DEFAULT_IMAGE_FALLBACK;
    }
    if (this.disablePreview == null) {
      this.disablePreview = true;
    }
  }
}
