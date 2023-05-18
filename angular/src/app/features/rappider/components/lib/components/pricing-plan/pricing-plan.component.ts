import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { DividerComponentConfig } from '../../utils/divider';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.scss'],
})
export class RappiderPricingPlanComponent {
  /* title */
  @Input() title: HeadingComponentConfig;
  /* subTitle */
  @Input() subtitle: HeadingComponentConfig;
  /* price */
  @Input() price: string;
  /* price description for example per month */
  @Input() priceDescription: string;
  /* descriptions about pricing plan */
  @Input() features: string[];
  @Input() button: ButtonComponentConfig;
  @Input() divider: DividerComponentConfig;
  /* returns nothing just triggers */
  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
