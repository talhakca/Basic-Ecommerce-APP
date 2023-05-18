import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ColorConfig } from '../../utils/shared/color/color.interface';
import { TypographyConfig } from '../../utils/shared/typography/typography.interface';
import { TextMode } from '../../utils/text';

@Component({
  selector: 'rappider-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class RappiderTextComponent implements OnInit, OnChanges {
  @Input() textMode?: TextMode;
  // text content for html mode
  @Input() content: string;
  // text content for simple text mode
  @Input() text: string;
  @Input() typography: TypographyConfig;
  @Input() colorSettings: ColorConfig;

  TextMode = TextMode;
  safeHTML: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  initData() {
    if (!this.textMode) {
      this.textMode = TextMode.Text;
    }
    if (this.content && this.textMode === TextMode.Html) {
      this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(
        this.content || this.text
      );
    }
  }

  ngOnInit() {
    this.initData();
  }

  ngOnChanges() {
    this.initData();
  }
}
