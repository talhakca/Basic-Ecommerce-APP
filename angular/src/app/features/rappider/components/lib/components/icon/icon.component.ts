import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { IconType } from '../../utils/icon/icon-type.enum';
import { NgZorroIconTheme } from '../../utils/icon/ng-zorro-icon-theme.enum';
import { FontAwesomeIconAnimation } from '../../utils/icon/font-awesome-icon-animation.enum';
import { FontAwesomeIconType } from '../../utils/icon-picker-two';

@Component({
  selector: 'rappider-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RappiderIconComponent implements OnInit, OnChanges {
  /* icon name */
  @Input() name: string;
  /* icon library */
  @Input() type: IconType;
  /* theme for selected icon library */
  @Input() theme: NgZorroIconTheme;
  /* icon color */
  @Input() color: string;
  /* icon font size */
  @Input() size: string;
  @Input() secondColor: string;
  @Input() animation: FontAwesomeIconAnimation;
  @Input() style: FontAwesomeIconType;

  IconType = IconType;

  constructor() {}

  ngOnInit(): void {
    this.initDefault();
  }

  ngOnChanges(): void {
    this.initDefault();
  }

  initDefault() {
    if (!this.type) {
      this.type = IconType.FontAwesome;
    }
  }
}
