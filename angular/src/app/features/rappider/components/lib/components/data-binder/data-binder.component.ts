import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { clone } from 'lodash';
import { JsonSchemaService } from '../../services';
import { JsonSchema } from '../../utils/shared';

@Component({
  selector: 'rappider-data-binder',
  templateUrl: './data-binder.component.html',
  styleUrls: ['./data-binder.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderDataBinderComponent),
      multi: true,
    },
  ],
})
export class RappiderDataBinderComponent implements ControlValueAccessor {
  @Input() options: JsonSchema[];

  autoComplateOptions = [];
  inputValue = '';

  _value: Record<string, any>;

  constructor(private jsonSchemaService: JsonSchemaService) {}

  get value() {
    return this._value;
  }

  set value(value: Record<string, any>) {
    this.initValue(value);
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: Record<string, any>): void {
    this.initValue(value);
  }

  initValue(value: Record<string, any>) {
    if (!value) {
      this.value = {};
    } else {
      this._value = value;
      // this.inputValue = value?.map(val => val.key)?.join('.') || '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  inputChange() {
    this.setOptionsByValue();
    const splittedValue = this.inputValue?.split('.');

    this.value = {};
    if (splittedValue?.length) {
      const schema = this.options?.find((jsonSchema) =>
        this.jsonSchemaService.getDefinitionByElementName(
          splittedValue[0],
          jsonSchema
        )
      );
      let currentDataFieldElement =
        this.jsonSchemaService.getDefinitionByElementName(
          splittedValue[0],
          schema
        );
      this.value = {
        [splittedValue[0]]: currentDataFieldElement,
      };
      splittedValue.forEach((value, index) => {
        if (index !== 0) {
          if (currentDataFieldElement.type === 'object') {
            currentDataFieldElement = currentDataFieldElement.properties[value];
            if (currentDataFieldElement?.$ref) {
              currentDataFieldElement =
                this.jsonSchemaService.getDefinitionByRefName(
                  currentDataFieldElement.$ref,
                  schema
                );
            }
          } else if (currentDataFieldElement?.$ref) {
            currentDataFieldElement =
              this.jsonSchemaService.getDefinitionByRefName(
                currentDataFieldElement.$ref,
                schema
              );
          }
          this.value = {
            ...this.value,
            [value]: currentDataFieldElement,
          };
        }
      });
      Object.keys(this.value).forEach((key) =>
        this.value[key] === undefined ? delete this.value[key] : {}
      );
    }
  }

  setOptionsByValue() {
    let optionsData;
    /* Since we will present the properties of the second to last element as an option,
     * we clone our value and extract the last element.
     */
    const splittedValue = this.inputValue?.split('.');
    const splittedValueWithoutLatest = clone(splittedValue);
    const latestValue = splittedValueWithoutLatest.pop();

    // display all options if there is no input
    if (!splittedValue?.length || splittedValue?.[0] === '') {
      optionsData = this.options.map((jsonSchema) =>
        this.jsonSchemaService.getDefinitionByRefName(
          jsonSchema['$ref'],
          jsonSchema
        )
      );
      // search input in options if there is only one value (no dots)
    } else if (splittedValue?.length === 1) {
      optionsData = this.options
        ?.map((jsonSchema) => {
          if (
            this.jsonSchemaService
              .getDefinitionByRefName(jsonSchema['$ref'], jsonSchema)
              .title.toLowerCase()
              .includes(splittedValue[0].toLowerCase())
          ) {
            return this.jsonSchemaService.getDefinitionByRefName(
              jsonSchema['$ref'],
              jsonSchema
            );
          }
        })
        ?.filter((e) => e);
    } else {
      const schema = this.options.find((jsonSchema) =>
        this.jsonSchemaService.getDefinitionByElementName(
          splittedValue[0],
          jsonSchema
        )
      );
      const existingElement = this.jsonSchemaService.findElementInJsonSchema(
        splittedValueWithoutLatest,
        schema
      );
      optionsData = existingElement?.properties
        ? Object.keys(existingElement?.properties)?.filter((option) =>
            option.toLowerCase().includes(latestValue.toLowerCase())
          )
        : [];
    }

    this.autoComplateOptions =
      optionsData?.map((option) => ({
        key: option?.title || option,
        value: splittedValueWithoutLatest?.length
          ? `${splittedValueWithoutLatest.join('.')}.${option?.title || option}`
          : option?.title || option,
      })) || [];
  }
}
