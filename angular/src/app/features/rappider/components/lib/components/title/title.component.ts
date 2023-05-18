import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TypographyColorType } from '../../utils/text/typography-color-type.enum';
import { TITLE_SEPERATOR } from '../../utils/title/title-seperator.variable';

@Component({
  selector: 'rappider-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class RappiderTitleComponent implements OnChanges {
  @Input() mainTitle: string;
  @Input() color: TypographyColorType;
  @Input() title: string | string[];
  @Input() seperator: string;
  DEFAULT_TITLE_SEPERATOR = TITLE_SEPERATOR;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.title.currentValue) {
      this.title = [];
    } else if (typeof changes.title.currentValue === 'string') {
      this.title = [String(this.title)];
    } else if (Array.isArray(changes.title.currentValue)) {
      this.title = (<string[]>this.title).filter((key) => key);
    }
  }
}
