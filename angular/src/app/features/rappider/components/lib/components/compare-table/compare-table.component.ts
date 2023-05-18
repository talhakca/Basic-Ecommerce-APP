import { Component, Input, OnChanges } from '@angular/core';
import { CompareTableItemContent } from '../../utils/compare-table/compare-table-item-content.interface';
import { CompareTableItem } from '../../utils/compare-table/compare-table-item.interface';
import { CompareTableLabel } from '../../utils/compare-table/compare-table-label.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';

@Component({
  selector: 'rappider-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.scss'],
})
export class RappiderCompareTableComponent implements OnChanges {
  /* table title */
  @Input() title: HeadingComponentConfig;

  /* table labels */
  @Input() labels: CompareTableLabel[];

  /* table items */
  @Input() items: CompareTableItem[];

  ngOnChanges(): void {
    this.sortLabels();
  }

  /* sort label by index */
  sortLabels() {
    this.labels.sort((a, b) => (a.index < b.index ? -1 : 1));
  }

  setcompareTableCellClass(content: CompareTableItemContent) {
    return content.cssClass
      ? `compare-table-cell ${content.cssClass}`
      : 'compare-table-cell';
  }
}
