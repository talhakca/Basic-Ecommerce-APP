import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontCardItem } from '../../utils/font-card/font-card-interface';
import { IconType } from '../../utils/icon/icon-type.enum';
import { RadioGroupOptions, RadioGroupSize } from '../../utils/radio-group';

@Component({
  selector: 'rappider-font-card',
  templateUrl: './font-card.component.html',
  styleUrls: ['./font-card.component.scss'],
})
export class RappiderFontCardComponent implements OnInit {
  @Input() fontCardItems: FontCardItem;

  @Output() fontCardSelected = new EventEmitter<FontCardItem>();

  IconType = IconType;
  radioGroupConfig: RadioGroupOptions[];
  size = RadioGroupSize.Large;
  displayTypeCell = true;

  ngOnInit(): void {
    this.setRadioGroupConfig();
  }

  setRadioGroupConfig() {
    this.radioGroupConfig = [
      {
        value: 'icon-cell',
        icon: {
          name: 'fa-solid fa-grid',
          type: IconType.FontAwesome,
          color: this.displayTypeCell ? '#1A73E8' : '#53535F',
        },
        iconSize: '20px',
      },
      {
        value: 'icon-table',
        icon: {
          name: 'fa-solid fa-list-ul',
          type: IconType.FontAwesome,
          color: this.displayTypeCell ? '#53535F' : '#1A73E8',
        },
        iconSize: '20px',
      },
    ];
  }
  onFontCardItemSelect(value: FontCardItem) {
    this.fontCardSelected.emit(value);
  }

  onListDisplayChange(onListDisplayChange) {
    if (onListDisplayChange === 'icon-cell') {
      this.displayTypeCell = true;
    } else {
      this.displayTypeCell = false;
    }
    this.setRadioGroupConfig();
  }
}
