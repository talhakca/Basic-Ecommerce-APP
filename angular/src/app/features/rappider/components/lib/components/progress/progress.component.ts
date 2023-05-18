import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { defaultProgressStrokeWidth } from '../../utils/progress/progress-default-stroke-width';
import { defaultProgressWidth } from '../../utils/progress/progress-default-width';
import { ProgressSize } from '../../utils/progress/progress-size.enum';
import { ProgressStatus } from '../../utils/progress/progress-status.enum';
import { ProgressType } from '../../utils/progress/progress-type.enum';
import { ColorConfig, SpacingConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class RappiderProgressComponent implements OnInit {
  // to set the completion percentage
  @Input() percent: number;
  // whether to display the progress value and the status icon
  @Input() showInfo: boolean;
  // 	to set the status of the Progress
  @Input() status: ProgressStatus;
  // to set the type
  @Input() type: ProgressType;
  // segmented success percent
  @Input() successPercent: number;
  // size of progress
  @Input() size: ProgressSize;
  //	to set the canvas width of the dashboard progress bar (circle & dashboard)
  @Input() width: number;
  // to set the width of the circular progress bar
  @Input() strokeWidth: number;
  @Input() isSuccessPercentVisible: boolean;
  @Input() colorSettings: ColorConfig;
  @Input() paddingSettings: SpacingConfig;
  @Input() marginSettings: SpacingConfig;

  @HostBinding('style.--custom-progress-color') progressColor;
  @HostBinding('style.--custom-progress-background-color')
  progressBackgroundColor;

  ngOnInit(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.width && !this.strokeWidth) {
      // ng-zorro default width ( for circle type ) and stroke width
      this.width = defaultProgressWidth;
      this.strokeWidth = defaultProgressStrokeWidth;
    }
    if (this.isSuccessPercentVisible == null) {
      this.isSuccessPercentVisible = false;
    }
    this.setColorConfig();
  }

  setColorConfig() {
    if (this.colorSettings?.color) {
      this.progressColor = this.colorSettings?.color;
    } else {
      this.progressColor = 'var(--primary-color)';
    }

    if (this.colorSettings?.backgroundColor) {
      this.progressBackgroundColor = this.colorSettings?.backgroundColor;
    } else {
      this.progressBackgroundColor = 'var(--component-header-background-color)';
    }
  }
}
