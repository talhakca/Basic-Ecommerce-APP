import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services';
import {
  AddressFormData,
  ButtonComponentConfig,
  ButtonType,
} from '../../utils';

@Component({
  selector: 'rappider-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class RappiderAddressFormComponent implements OnChanges, OnInit {
  @Input() data: AddressFormData;
  @Input() submitButton: ButtonComponentConfig;

  @Output() formSubmit = new EventEmitter<AddressFormData>();

  addressForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.initDefaults();
  }

  ngOnChanges(): void {
    this.buildForm();
    this.initDefaults();
  }

  initDefaults() {
    if (this.submitButton == null) {
      this.submitButton = {
        text: 'SHARED.SUBMIT',
        type: ButtonType.Primary,
      };
    }
  }

  buildForm() {
    this.addressForm = this.formBuilder.group({
      street: [this.data?.street, Validators.required],
      city: [this.data?.city, Validators.required],
      state: [this.data?.state, Validators.required],
      zip: [this.data?.zip, Validators.required],
      country: [this.data?.country, Validators.required],
    });
  }

  submitForm() {
    this.formService.checkFormValidation(this.addressForm);
    if (this.addressForm.valid) {
      this.formSubmit.emit(this.addressForm.value);
    }
  }
}
