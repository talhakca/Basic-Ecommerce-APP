/* angular */
import { createReducer, on } from '@ngrx/store';

/* actions */
import * as RouterDataStoreActions from './router-data-store.actions';

/* state key */
export const featureKey = 'RouterDataStore';

/* state interface */
export interface RouterState {
  queryParams: any;
  params: any;
  currentPath: string;
}

/* initial values */
export const initialState: RouterState = {
  queryParams: {},
  params: {},
  currentPath: null,
};

export const reducer = createReducer(
  initialState,
  on(RouterDataStoreActions.SetParams, (state, action) => ({
    ...state,
    params: action.payload.params,
  })),
  on(RouterDataStoreActions.SetQueryParams, (state, action) => ({
    ...state,
    queryParams: action.payload.queryParams,
  })),
  on(RouterDataStoreActions.ActivePathChanged, (state, action) => ({
    ...state,
    currentPath: action.payload.path,
  }))
);
