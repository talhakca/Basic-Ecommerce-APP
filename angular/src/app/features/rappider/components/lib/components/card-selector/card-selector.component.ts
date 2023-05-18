import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonComponentConfig } from '../../utils/button';
import { CardsConfig } from '../../utils/cards/card-config.interface';
import { ModalComponentConfig } from '../../utils/modal/modal-config.interface';
import { SelectComponentConfig } from '../../utils/select';

@Component({
  selector: 'rappider-card-selector',
  templateUrl: './card-selector.component.html',
  styleUrls: ['./card-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => CardSelectorComponent),
      multi: true,
    },
  ],
})
export class CardSelectorComponent implements ControlValueAccessor {
  /* cards inputs */
  @Input() cardsConfig: CardsConfig;
  /* modal inputs */
  @Input() modalConfig: ModalComponentConfig;
  /* button inputs */
  @Input() buttonConfig: ButtonComponentConfig;

  @Output() changeTemplate = new EventEmitter<string>();

  _value: string;
  selectedId: string;
  visibility: boolean;

  get value() {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
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

  onTemplateSelect(selectedTemplateId) {
    this.selectedId = selectedTemplateId;
  }

  onSelectClick() {
    this.value = this.selectedId;
    this.changeTemplate.emit(this.value);
    this.onCloseModal();
  }

  closeModalAndClearSelectedTemplate() {
    this.onCloseModal();
  }

  onSelectButtonClick() {
    this._value = null;
    this.selectedId = this.value;
    this.visibility = true;
  }

  onCloseModal() {
    this.selectedId = null;
    this.visibility = false;
    this.cardsConfig.items.forEach((conf) => (conf.isSelected = false));
  }
}
