import {
  Component,
  Output,
  EventEmitter,
  forwardRef,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { AutoComponentConfig } from '../../utils/auto-complete';
import {
  ButtonColorType,
  ButtonComponentConfig,
  ButtonSize,
  ButtonType,
} from '../../utils/button';
import {
  IconComponentConfig,
  IconType,
  NgZorroIconTheme,
} from '../../utils/icon';
import {
  MaterialIcons,
  FontAwesomeIcons,
  FontAwesomeIconType,
  fontAwesomeIconTypeButtonsConfig,
  NgZorroIcons,
  ngZorroIconTypeButtonsConfig,
  ngZorroIconThemeOptionsConfig,
  fontAwesomeIconAnimationOptionsConfig,
} from '../../utils/icon-picker-two';
import { snakeCase } from 'lodash';
import { RadioGroupOptions } from '../../utils/radio-group';
import { fontAwesomeIconStyleOptionsConfig } from '../../utils/icon-picker-two/font-awesome-icon-style-option-config';

@Component({
  selector: 'rappider-icon-picker-two',
  templateUrl: './icon-picker-two.component.html',
  styleUrls: ['./icon-picker-two.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderIconPickerTwoComponent),
      multi: true,
    },
  ],
})
export class RappiderIconPickerTwoComponent
  implements ControlValueAccessor, OnInit
{
  @Output() setSelectIcon = new EventEmitter<IconComponentConfig>();

  searchBox: AutoComponentConfig = {
    placeholder: 'Search icon',
  };
  searchButton: ButtonComponentConfig = {
    type: ButtonType.Link,
    icon: {
      name: 'fa-solid fa-magnifying-glass',
    },
  };
  okButton: ButtonComponentConfig = {
    type: ButtonType.Primary,
    text: 'OK',
    size: ButtonSize.Small,
  };
  cancelButton: ButtonComponentConfig = {
    type: ButtonType.Dashed,
    text: 'Cancel',
    size: ButtonSize.Small,
    colorType: ButtonColorType.Danger,
  };
  iconTypeOptions: RadioGroupOptions[] = [
    {
      value: IconType.NgZorro,
      label: 'Ng-Zorro',
    },
    {
      value: IconType.FontAwesome,
      label: 'Font Awesome',
    },
    {
      value: IconType.Material,
      label: 'Material',
    },
  ];

  iconThemeOptions = ngZorroIconThemeOptionsConfig;
  iconStyleOptions = fontAwesomeIconStyleOptionsConfig;
  iconAnimationOptions = fontAwesomeIconAnimationOptionsConfig;
  IconType = IconType;
  customIconForm: FormGroup;
  importIconForm: FormGroup;
  activeTab = IconType.FontAwesome;
  selectedIcon: string;
  searchValue: string;
  searchResults: string[];
  selectedFontAwesomeIconTypes: FontAwesomeIconType[] = [];
  FontAwesomeIconType = FontAwesomeIconType;

  selectedNgZorroIconThemeOptions: NgZorroIconTheme[] = [];
  selectedNgZorroIconTheme: NgZorroIconTheme;
  NgZorroIconTheme = NgZorroIconTheme;

  materialIcons = MaterialIcons;
  fontAwesomeIcons = FontAwesomeIcons;
  ngZorroIcons = NgZorroIcons;
  isCollapsed = false;
  fontAwesomeIconTypeButtonsConfig = fontAwesomeIconTypeButtonsConfig;
  ngZorroIconTypeButtonsConfig = ngZorroIconTypeButtonsConfig;

  _value: IconComponentConfig;

  constructor(private formBuilder: FormBuilder) {}

  get value() {
    return this._value;
  }

  set value(value: IconComponentConfig) {
    this.initValue(value);
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.buildCustomIconForm();
    this.buildImportIconForm();
  }

  writeValue(value: IconComponentConfig): void {
    if (value) {
      this.selectedIcon = value.name;
      this.activeTab = value.type;
    } else {
      this.initValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  selectIcon(icon, ngZorroTheme?: NgZorroIconTheme) {
    this.selectedIcon = icon;
    this.selectedNgZorroIconTheme = ngZorroTheme;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onSearchTextChange(searchText: string) {
    this.searchValue = searchText;
    if (this.activeTab === IconType.Material) {
      this.filterMaterialIcons();
    }
    if (this.activeTab === IconType.FontAwesome) {
      this.filterFontAwesomeIcons();
    }
    if (this.activeTab === IconType.NgZorro) {
      this.filterNgZorroIcons();
    }
  }

  activeTabChange(tabName: IconType) {
    this.activeTab = tabName;
    this.selectedIcon = null;
  }

  filterMaterialIcons() {
    this.searchResults = this.materialIcons.filter((icon) =>
      icon.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  filterNgZorroIcons() {
    this.searchResults = this.ngZorroIcons.filter((icon) =>
      icon.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  filterFontAwesomeIcons() {
    this.searchResults = this.fontAwesomeIcons.filter((icon) =>
      icon.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  onOkButtonClick() {
    const iconName = this.selectedIcon;
    const iconType = snakeCase(this.activeTab).toUpperCase() as IconType;

    this.value = {
      name: iconName,
      type: iconType,
      theme: this.selectedNgZorroIconTheme,
    };
    this.setSelectIcon.emit(this.value);
  }

  onCancelButtonClick() {
    this.selectedIcon = null;
    this.value = null;
  }

  initValue(value: IconComponentConfig) {
    if (!value) {
      this._value = {
        name: null,
      };
    } else {
      this._value = value;
    }
  }

  buildCustomIconForm() {
    const formGroup = {
      name: '',
      color: '',
      size: '',
      type: '',
      theme: '',
      secondColor: '',
      style: '',
      animation: '',
    };
    this.customIconForm = this.formBuilder.group(formGroup);
  }

  buildImportIconForm() {
    const formGroup = {
      name: '',
      size: '',
      type: IconType.ImportIcon,
    };
    this.importIconForm = this.formBuilder.group(formGroup);
  }

  onCustomIconSubmit() {
    this.value = {
      name:
        this.customIconForm.value.style +
        ' ' +
        this.customIconForm.value.name +
        ' ' +
        this.customIconForm.value.animation,
      color: this.customIconForm.value.color,
      size: this.customIconForm.value.size,
      type: this.customIconForm.value.type,
      theme: this.customIconForm.value.theme,
      secondColor: this.customIconForm.value.secondColor,
    };
    this.setSelectIcon.emit(this.value);
  }

  onImportIconSubmit() {
    this.value = this.importIconForm.value;
    this.setSelectIcon.emit(this.value);
  }
}
