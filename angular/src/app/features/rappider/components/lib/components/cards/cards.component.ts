import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import Fuse from 'fuse.js';
import { CardOneComponentConfig } from '../../utils/card-one';
import {
  ItemPerRow,
  CardOneListCardClickOutput,
} from '../../utils/card-one-list';
import { IconType } from '../../utils/icon';
import { InputGroupComponentConfig } from '../../utils/input-group';
import { SelectMode, SelectComponentConfig } from '../../utils/select';
import { TitleToolbarComponentConfig } from '../../utils/title-toolbar';
import { PaginationComponentConfig } from '../../utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rappider-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderCardsComponent),
      multi: true,
    },
  ],
})
export class RappiderCardsComponent implements ControlValueAccessor, OnDestroy {
  @Input() title: TitleToolbarComponentConfig;
  @Input() items: CardOneComponentConfig[];
  @Input() itemCountPerRow = ItemPerRow.Three;
  @Input() isLoading = false;
  @Input() showTitleOnImage: boolean;
  @Input() showDescriptionOnImage: boolean;
  @Input() selectConfig: SelectComponentConfig;
  @Input() paginationConfig: PaginationComponentConfig;

  @Output() cardClick = new EventEmitter<any>();

  _value: string;
  selectedId: string;
  searchText: string;
  selectedTags: string[] | string;
  /* Search Bar Config */
  inputGroupConfig: InputGroupComponentConfig = {
    textbox: {
      placeholder: 'Search in Templates',
    },
    suffixIcon: {
      name: 'fas fa-search',
      type: IconType.FontAwesome,
    },
  };

  /* searchOptions for fuse */
  searchOptions = {
    threshold: 0.2,
    keys: [
      'titles.content',
      'descriptions.content',
      'descriptions.text',
      'additionalTags.text.text',
    ],
  };

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  ngOnDestroy(): void {
    this.items.forEach((conf) => (conf.isSelected = false));
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this._value = value;
    this.selectedId = this._value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onCardClick(output: CardOneListCardClickOutput) {
    this.items.forEach((conf) => (conf.isSelected = false));
    if (this.selectedId === output.item.data.id) {
      this.selectedId = null;
    } else {
      this.selectedId = output?.item.data?.id;
      this.handleConfigWithSelectedId();
    }
    this.value = this.selectedId;
    this.cardClick.emit(this.value);
  }

  handleConfigWithSelectedId() {
    const selectedTemplateConfig = this.items.find(
      (conf) => conf?.data?.id === this.selectedId
    );
    if (selectedTemplateConfig) {
      selectedTemplateConfig.isSelected = true;
    }
  }

  /* Displaying data according to tag and search filtering */
  getDisplayedData() {
    let dataToDisplay = this.items;
    if (this.selectConfig?.options?.length && this.selectedTags?.length) {
      if (
        [
          SelectMode.Multiple,
          SelectMode.Tags,
          SelectMode.OptionSelect,
        ].includes(this.selectConfig.settings.mode)
      ) {
        dataToDisplay = this.items.filter((item) =>
          item.additionalTags?.some((tag) =>
            this.selectedTags.includes(tag.text.text)
          )
        );
      } else {
        dataToDisplay = this.items.filter((item) =>
          item.additionalTags?.some(
            (tag) => tag.text.text === this.selectedTags
          )
        );
      }
    }
    return this.searchByOptions(
      dataToDisplay,
      this.searchOptions,
      this.searchText
    );
  }

  /* Paginates the displayed data */
  getDataWithPagination() {
    if (this.paginationConfig?.showPagination) {
      return this.getDisplayedData()?.slice(
        (this.paginationConfig.pageIndex - 1) * this.paginationConfig.pageSize,
        this.paginationConfig.pageIndex * this.paginationConfig.pageSize
      );
    } else {
      return this.getDisplayedData();
    }
  }

  searchByOptions(
    list: any,
    options: Fuse.IFuseOptions<unknown>,
    pattern: string
  ): any {
    if (pattern) {
      const fuse = new Fuse(list, options);
      return fuse.search(pattern)?.map((item) => item.item);
    } else {
      return list;
    }
  }

  /* Selected tags come as parameters and are defined to be filtered. */
  onSelectedTagsChange(selectedTags) {
    this.selectedTags = selectedTags;
  }

  /* Page index comes as a parameter and is defined to be paginated */
  onPageIndexChange(pageIndex: number) {
    this.paginationConfig.pageIndex = pageIndex;
  }
}
