import { Component, Input, OnChanges } from '@angular/core';
import { FontCardItem } from '../../utils/font-card/font-card-interface';
import { FontPickerType } from '../../utils/font-picker/font-picker-select-type.enum';
import { SearchService } from '../../services/search-service/search.service';
import { WebFontLoaderService } from '../../services/web-font-loader-service/web-font-loader.service';
import { SliderComponentConfig } from '../../utils/slider/slider-component-config.interface';

@Component({
  selector: 'rappider-font-picker',
  templateUrl: './font-picker.component.html',
  styleUrls: ['./font-picker.component.scss'],
})
export class RappiderFontPickerComponent implements OnChanges {
  @Input() fontCardItems: FontCardItem[];
  @Input() slider: SliderComponentConfig;
  @Input() fontSizeSliderValue: number;
  @Input() sizePerPage: number;

  selectedfontPickerTypeValue = FontPickerType.Custom;
  customText: string;
  isPaginationDisabled = false;
  copyfontCardItems: FontCardItem[];
  fontCardDataSize: number;
  pageIndex = 1;
  searchWord: string;
  fontPickerTypeValue = [
    {
      key: FontPickerType.Custom,
      value: FontPickerType.Custom,
    },
    {
      key: FontPickerType.Paragraph,
      value: FontPickerType.Paragraph,
    },
    {
      key: FontPickerType.Sentence,
      value: FontPickerType.Sentence,
    },
  ];
  InputGroupConfig = {
    suffixIcon: {
      name: 'fa-regular fa-magnifying-glass',
    },
    textbox: {
      placeholder: 'Search by font names',
    },
  };

  constructor(
    private searchService: SearchService,
    private webFontLoader: WebFontLoaderService
  ) {}

  ngOnChanges() {
    this.copyfontCardItems = this.fontCardItems;
    this.fontCardItems = this.copyfontCardItems?.slice(0, this.sizePerPage);
    this.setPaginationValue();
    this.useWebFontLoader();
  }
  /**
   *calculates the page number
   *
   * @memberof RappiderFontPickerComponent
   */
  setPaginationValue() {
    this.fontCardDataSize =
      Math.ceil(this.copyfontCardItems?.length / this.sizePerPage) * 10;
  }
  /**
   *It imports the font family with lazy load for each loaded page.
   *
   * @memberof RappiderFontPickerComponent
   */
  useWebFontLoader() {
    const lazyLoadData = this.fontCardItems?.map(
      (familyNameData) => familyNameData.fontFamily
    );
    if (lazyLoadData?.length) {
      this.webFontLoader.useWebFontLoader(lazyLoadData);
    }
  }

  onFontPixelSliderValueChange(value: number) {
    // If there is a change in the slider, the marks and text size change.
    const markValue = value + 'px';
    this.slider.marks = {
      0: markValue,
    };
    this.setFontSize(markValue);
  }

  setFontSize(value: string) {
    this.fontCardItems.forEach((data) => (data.fontSize = value));
  }
  /**
   *Changes the displayed text according to the selected select value.
   *
   * @param {FontPickerType} textType
   * @param {string} [text]
   * @memberof RappiderFontPickerComponent
   */
  setFontCardTextType(textType: FontPickerType, text?: string) {
    if (textType === FontPickerType.Custom) {
      this.fontCardItems.forEach((data) => {
        data.textType = FontPickerType.Custom;
        data.customText = text;
      });
    } else if (textType === FontPickerType.Paragraph) {
      this.fontCardItems.forEach(
        (data) => (data.textType = FontPickerType.Paragraph)
      );
    } else {
      this.fontCardItems.forEach(
        (data) => (data.textType = FontPickerType.Sentence)
      );
    }
  }
  /**
   *Function called when select value changes
   *
   * @param {*} event
   * @memberof RappiderFontPickerComponent
   */
  onSelectFontPickerTypeValueChange(selectedfontPickerTypeValue) {
    // Updates the type of text to be listed on the cards.
    if (selectedfontPickerTypeValue === FontPickerType.Paragraph) {
      this.customText = '';
      this.setFontCardTextType(FontPickerType.Paragraph, this.customText);
    } else if (selectedfontPickerTypeValue === FontPickerType.Sentence) {
      this.customText = '';
      this.setFontCardTextType(FontPickerType.Sentence, this.customText);
    } else {
      this.setFontCardTextType(FontPickerType.Custom, this.customText);
    }
  }
  onTextBoxValueChange() {
    if (this.customText) {
      // if we want to fill the cards with custom text
      this.selectedfontPickerTypeValue = FontPickerType.Custom;
      this.setFontCardTextType(FontPickerType.Custom, this.customText);
    }
    if (!this.customText) {
      // if we leave the custom text section empthy.
      this.selectedfontPickerTypeValue = FontPickerType.Sentence;
      this.setFontCardTextType(FontPickerType.Sentence);
    }
  }

  onSearch() {
    if (this.searchWord) {
      this.isPaginationDisabled = true;
      const options = {
        keys: ['fontFamily'],
        threshold: 0.4,
      };
      const results = this.searchService.searchByOptions(
        this.copyfontCardItems,
        options,
        this.searchWord
      );
      const mappedResults = results.map((result) => result.item);
      this.fontCardItems = mappedResults;
      this.useWebFontLoader();
    } else {
      this.isPaginationDisabled = false;
      /** returns to the last page when we exit the search process */
      this.onPageIndexChange(this.pageIndex);
    }
  }

  /**
   *
  Function that changes font data when page number changes
   *
   * @param {*} event
   * @memberof RappiderFontPickerComponent
   */
  onPageIndexChange(pageNumber) {
    if (this.isPaginationDisabled === false) {
      this.fontCardItems = this.copyfontCardItems.slice(
        (pageNumber - 1) * 12,
        pageNumber * 12
      );
      /** It updates the font size of the changed data according to the slider. */
      this.onFontPixelSliderValueChange(this.fontSizeSliderValue);
      /** calls the fontloader when the page number changes */
      this.useWebFontLoader();
    }
  }

  receiveTemplateData(event: FontCardItem) {}
}
