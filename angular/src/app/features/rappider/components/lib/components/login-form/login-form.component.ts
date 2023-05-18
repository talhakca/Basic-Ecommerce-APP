import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponentConfig, ButtonType, LoginFormData } from '../../utils';
import { FormService } from '../../services';

@Component({
  selector: 'rappider-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class RappiderLoginFormComponent implements OnInit, OnChanges {
  @Input() data: LoginFormData;
  @Input() submitButton: ButtonComponentConfig;
  @Input() usernameRegExp: RegExp;
  @Input() passwordRegExp: RegExp;
  @Input() usernameRegExpErrorTip: string;
  @Input() passwordRegExpErrorTip: string;

  @Output() formSubmit = new EventEmitter<LoginFormData>();

  loginForm: FormGroup;

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
    this.loginForm = this.formBuilder.group({
      username: [
        this.data?.username,
        [Validators.required, Validators.pattern(this.usernameRegExp)],
      ],
      password: [
        this.data?.password,
        [Validators.required, Validators.pattern(this.passwordRegExp)],
      ],
    });
  }

  getFieldErrors(fieldName: string, errorKey: string) {
    const control = this.loginForm.get(fieldName);
    const isDirty = control.dirty;
    const errors = control.errors;

    return isDirty && errors && control.hasError(errorKey);
  }

  submitForm() {
    this.formService.checkFormValidation(this.loginForm);
    if (this.loginForm.valid) {
      this.formSubmit.emit(this.loginForm.value);
    }
  }
}
