import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeCardElementOptions } from '@stripe/stripe-js';
import { StripePaymentElementComponent, StripeService } from 'ngx-stripe';
import { ButtonComponentConfig } from '../../utils/button';
import { StripeFormField } from '../../utils/stripe/stripe-form-field.enum';

@Component({
  selector: 'rappider-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss'],
})
export class RappiderStripeComponent implements OnInit, OnChanges {
  @ViewChild(StripePaymentElementComponent)
  paymentElement: StripePaymentElementComponent;

  @Input() cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };
  @Input() data: any;
  @Input() submitButton: ButtonComponentConfig;
  @Input() nameFieldVisibility: boolean;
  @Input() emailFieldVisibility: boolean;
  @Input() addressFieldVisibility: boolean;
  @Input() zipcodeFieldVisibility: boolean;
  @Input() cityFieldVisibility: boolean;
  @Input() clientSecret: string;

  @Output() paymentSuccess = new EventEmitter<any>();
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() paymentError = new EventEmitter<any>();

  appearance = {
    theme: 'stripe',
    variables: {
      spacingGridRow: '17px',
      spacingGridColumn: '10px',
      fontWeightNormal: '700',
      fontSizeSm: '14px',
      fontLineHeight: '19.5px',
      fontFamily:
        '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  };

  paymentElementForm: FormGroup;

  constructor(private fb: FormBuilder, private stripeService: StripeService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: any) {
    if (changes.data) {
      this.paymentElementForm.patchValue(this.data);
    }
  }

  pay() {
    this.paymentElementForm.updateValueAndValidity();
    if (this.paymentElementForm.valid) {
      this.submitButton.loading = true;
      this.stripeService
        .confirmPayment({
          elements: this.paymentElement.elements,
          confirmParams: {
            payment_method_data: {
              billing_details: {
                name: this.paymentElementForm.get(StripeFormField.Name)?.value,
                email: this.paymentElementForm.get(StripeFormField.Email)
                  ?.value,
                address: {
                  line1: this.paymentElementForm.get(StripeFormField.Address)
                    ?.value,
                  postal_code: this.paymentElementForm.get(
                    StripeFormField.Zipcode
                  )?.value,
                  city: this.paymentElementForm.get(StripeFormField.City)
                    ?.value,
                },
              },
            },
          },
          redirect: 'if_required',
        })
        .subscribe((result) => {
          if (result.error) {
            this.paymentError.emit(result);
          } else {
            if (result.paymentIntent.status === 'succeeded') {
              this.paymentSuccess.emit(result);
            }
          }
        });
    }
  }

  buildForm() {
    const formGroup = {
      name: [null, [Validators.required]],
      email: ['', [Validators.required]],
      address: [''],
      zipcode: [''],
      city: [''],
    };
    if (!this.nameFieldVisibility) {
      delete formGroup.name;
    }
    if (!this.emailFieldVisibility) {
      delete formGroup.email;
    }
    if (!this.addressFieldVisibility) {
      delete formGroup.address;
    }
    if (!this.zipcodeFieldVisibility) {
      delete formGroup.zipcode;
    }
    if (!this.cityFieldVisibility) {
      delete formGroup.city;
    }
    this.paymentElementForm = this.fb.group(formGroup);
  }
}
