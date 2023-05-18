import { Action, ActionBehavior } from '../../../utils/action-utils';
import { ButtonComponentConfig } from '../../../utils/button';

/* eslint-disable @typescript-eslint/ban-types */
export interface CardDataMapConfig {
  titleFieldName?: string;
  descriptionFieldName?: string;
  /* if there is getSubTitlesFunction, subtitles wil be generated by the function */
  getSubTitlesFunction?: Function;
  /* if there is NO getSubTitlesFunction;   subtitles wil be generated by the subtitleFieldNames */
  subtitleFieldNames?: string[];
  cardItemClickBehavior?: ActionBehavior;
  cardItemRouterLink?: string;
  deleteItemActionButton?: ButtonComponentConfig;
  editItemActionButton?: ButtonComponentConfig;
}
