/* angular */
import { createAction, props } from '@ngrx/store';

/* payloads */


/* action types */
export enum ActionTypes {
  ActivePathChanged = '[ROUTER] ActivePathChanged',
  SetQueryParams = '[ROUTER] SetQueryParams',
  SetParams = '[ROUTER] SetParams',
  Navigate = '[ROUTER] Navigate',
}

/* actions */

export const ActivePathChanged = createAction(
  ActionTypes.ActivePathChanged,
  props<{ payload: any }>()
);

export const SetQueryParams = createAction(
  ActionTypes.SetQueryParams,
  props<{ payload: any }>()
);

export const SetParams = createAction(
  ActionTypes.SetParams,
  props<{ payload: any }>()
);

export const Navigate = createAction(
  ActionTypes.Navigate,
  props<{ payload: any }>()
);
