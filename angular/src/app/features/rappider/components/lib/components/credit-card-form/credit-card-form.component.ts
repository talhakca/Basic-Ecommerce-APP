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
import { ButtonComponentConfig, ButtonType } from '../../utils';
import { CreditCardFormData } from '../../utils/credit-card-form';
import { DatePickerComponentConfig } from '../../utils/date-picker';

@Component({
  selector: 'rappider-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.scss'],
})
export class RappiderCreditCardFormComponent implements OnInit, OnChanges {
  @Input() data: CreditCardFormData;
  @Input() submitButton: ButtonComponentConfig;
  @Input() datePicker: DatePickerComponentConfig;

  @Output() formSubmit = new EventEmitter<CreditCardFormData>();

  creditCardForm: FormGroup;

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
    this.creditCardForm = this.formBuilder.group({
      fullName: [this.data?.fullName, Validators.required],
      cardNumber: [this.data?.cardNumber, Validators.required],
      securityCode: [this.data?.securityCode, Validators.required],
      expirationDate: [this.data?.expirationDate, Validators.required],
    });
  }

  submitForm() {
    this.formService.checkFormValidation(this.creditCardForm);
    if (this.creditCardForm.valid) {
      this.formSubmit.emit(this.creditCardForm.value);
    }
  }
}
