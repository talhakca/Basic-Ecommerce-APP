import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  PaymentSummaryContent,
  HeadingComponentConfig,
  ButtonComponentConfig,
  PaymentSummaryAdditionalContent,
  DividerComponentConfig,
} from '../../utils';

@Component({
  selector: 'rappider-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss'],
})
export class RappiderPaymentSummaryComponent {
  @Input() title: HeadingComponentConfig;
  @Input() contents: PaymentSummaryContent[];
  @Input() additionalContents: PaymentSummaryAdditionalContent[];
  @Input() footerContents: PaymentSummaryAdditionalContent[];
  @Input() divider: DividerComponentConfig;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onClickButton(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
