/* angular */
import { createAction } from '@ngrx/store';

/* action types */
export enum ActionTypes {
  InitApp = '[APP] InitApp',

}



export const InitApp = createAction(ActionTypes.InitApp);
