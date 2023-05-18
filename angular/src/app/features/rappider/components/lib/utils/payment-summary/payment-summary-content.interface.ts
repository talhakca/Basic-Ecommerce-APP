import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { PaymentSummaryContentItem } from './payment-summary-content-item.interface';

export interface PaymentSummaryContent {
  title?: HeadingComponentConfig;
  items?: PaymentSummaryContentItem[];
}
