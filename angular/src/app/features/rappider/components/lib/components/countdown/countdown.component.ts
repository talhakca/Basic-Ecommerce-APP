import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { ColorConfig, TypographyConfig } from '../../utils/shared';

@Component({
  selector: 'rappider-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class RappiderCountdownComponent implements OnInit {
  /* data to emit */
  @Input() data: any;
  @Input() deadline: string | number;
  @Input() title: HeadingComponentConfig;
  @Input() format: string;
  @Input() prefix: string;
  @Input() timeTextTypography: TypographyConfig;
  @Input() timeTextColorSettings: ColorConfig;

  @Output() complete = new EventEmitter();

  @HostBinding('style.--countdown-color') color;
  @HostBinding('style.--countdown-background-color') backgroundColor;

  @HostBinding('style.--countdown-font-size') fontSize;
  @HostBinding('style.--countdown-font-weight') fontWeight;
  @HostBinding('style.--countdown-font-style') fontStyle;
  @HostBinding('style.--countdown-text-decaration') textDecoration;
  @HostBinding('style.--countdown-text-align') textAlign;
  @HostBinding('style.--countdown-text-shadow') textShadow;
  @HostBinding('style.--countdown-font-family') fontFamily;
  @HostBinding('style.--countdown-font-stretch') fontStretch;
  @HostBinding('style.--countdown-text-indent') textIndent;
  @HostBinding('style.--countdown-letter-spacing') letterSpacing;
  @HostBinding('style.--countdown-line-height') lineHeight;
  @HostBinding('style.--countdown-word-spacing') wordSpacing;
  @HostBinding('style.--countdown-text-transform') textTransform;
  @HostBinding('style.--countdown-user-select') userSelect;

  ngOnInit(): void {
    this.deadline = this.deadline ? Date.parse(this.deadline.toString()) : null;

    if (this.timeTextColorSettings || this.timeTextTypography) {
      this.setTimeTextConfig();
    }
  }

  onCountdownFinish() {
    this.complete.emit(this.data);
  }

  setTimeTextConfig() {
    this.color = this.timeTextColorSettings?.color;
    this.backgroundColor = this.timeTextColorSettings?.backgroundColor;

    this.fontSize = this.timeTextTypography?.fontSize;
    this.fontWeight = this.timeTextTypography?.fontWeight;
    this.fontStyle = this.timeTextTypography?.fontStyle;
    this.textDecoration = this.timeTextTypography?.textDecoration;
    this.textAlign = this.timeTextTypography?.textAlign;
    this.textShadow = this.timeTextTypography?.textShadow;
    this.fontFamily = this.timeTextTypography?.fontFamily;
    this.fontStretch = this.timeTextTypography?.fontStretch;
    this.textIndent = this.timeTextTypography?.textIndent;
    this.letterSpacing = this.timeTextTypography?.letterSpacing;
    this.lineHeight = this.timeTextTypography?.lineHeight;
    this.wordSpacing = this.timeTextTypography?.wordSpacing;
    this.textTransform = this.timeTextTypography?.textTransform;
    this.userSelect = this.timeTextTypography?.userSelect;
  }
}
