import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AutoComponentConfig } from '../../utils/auto-complete';
import { ButtonComponentConfig } from '../../utils/button';
import { SearchButtonClickOutput } from '../../utils/search';

@Component({
  selector: 'rappider-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class RappiderSearchComponent {
  @Input() primarySearchBox: AutoComponentConfig;
  @Input() secondarySearchBox: AutoComponentConfig;
  @Input() searchButton: ButtonComponentConfig;

  @Output() primarySearchTextChange = new EventEmitter<string>();
  @Output() secondarySearchTextChange = new EventEmitter<string>();
  @Output() searchButtonClick = new EventEmitter<SearchButtonClickOutput>();

  primarySearchBoxSearchValue: string;
  secondarySearchBoxSearchValue: string;

  onPrimarySearchTextChange(searchText: string) {
    this.primarySearchBoxSearchValue = searchText;
    this.primarySearchTextChange.emit(searchText);
  }

  onSecondarySearchTextChange(searchText: string) {
    this.secondarySearchBoxSearchValue = searchText;
    this.secondarySearchTextChange.emit(searchText);
  }

  onSearchButtonClick() {
    const emitData = {
      primarySearchBox: {
        value: this.primarySearchBoxSearchValue,
      },
      secondarySearchBox: {
        value: this.secondarySearchBoxSearchValue,
      },
    };
    this.searchButtonClick.emit(emitData);
  }
}
