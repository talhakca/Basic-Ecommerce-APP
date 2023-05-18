import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CategoryList } from '../../utils/category-list';
import { DividerComponentConfig } from '../../utils/divider/divider-component-config.interface';
import { DividerType } from '../../utils/divider/divider-type.enum';

@Component({
  selector: 'rappider-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class RappiderCategoryListComponent implements OnInit, OnChanges {
  @Input() items: CategoryList[];
  @Input() divider: DividerComponentConfig;

  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges() {
    this.initDefaults();
  }

  initDefaults() {
    if (this.divider == null) {
      this.divider = {
        type: DividerType.Vertical,
      };
    }
  }
}
