import { ButtonType } from '../button/button-type.enum';
import { FeedbackButtonActionBehavior } from './feedback-button-action-behavior.enum';

export interface FeedbackButton {
  content: string;
  type?: ButtonType;
  actionBehavior: FeedbackButtonActionBehavior;
  redirectUrl?: string;
}
