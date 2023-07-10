import { createReducer, on } from "@ngrx/store";
import { orderBy } from "lodash";
import { DistributorWithRelations } from "src/app/features/shared/sdk/models";
import * as DistributorAction from './distributor-data-store.actions';


export const featureKey = 'distKey';

export interface DistributorState {
    distributors: DistributorWithRelations[];
    isLoading: boolean;
    error: any;
}

/* Initial values */
export const initialState: DistributorState = {
    distributors: [],
    isLoading: false,
    error: ''
};

export const reducer = createReducer(
    initialState,
    on(DistributorAction.GetDistributors, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(DistributorAction.GetDistributorsSuccessful, (state, action) => {
        return {
            ...state,
            distributors: action.payload.distributors,
            isLoading: false
        }
    }),
    on(DistributorAction.GetDistributorsFailure, (state, action) => {
        return {
            ...state,
            error: 'Get distributors failure!',
            isLoading: false,
        }
    }),
    on(DistributorAction.CreateDistributor, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(DistributorAction.CreateDistributorSuccessful, (state, action) => ({
        ...state,
        distributors: [
            ...state.distributors,
            action.payload.distributor
        ],
        isLoading: false
    })),
    on(DistributorAction.CreateDistributorsFailure, (state, action) => {
        return {
            ...state,
            error: 'Create distributor failure!',
            isLoading: false,
        }
    }),
    on(DistributorAction.DeleteDistributor, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(DistributorAction.DeleteDistributorSuccessful, (state, action) => ({
        ...state,
        distributors: state.distributors.filter(distributor => distributor.id !== action.payload.deletedDistributorId)
    })),
    on(DistributorAction.DeleteDistributorsFailure, (state, action) => {
        return {
            ...state,
            error: 'Delete distributor failure!',
            isLoading: false,
        }
    }),
    on(DistributorAction.UpdateDistributor, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(DistributorAction.UpdateDistributorSuccessful, (state, action) => {
        return {
            ...state,
            distributors: orderBy(updateProperties(state.distributors, action.payload.updatedDistributor, action.payload.id), "name", "asc"),
            isLoading: false
        }
    }),
    on(DistributorAction.UpdateDistributorsFailure, (state, action) => {
        return {
            ...state,
            error: 'Update distributor failure!',
            isLoading: false,
        }
    }),


)
export function updateProperties(entities, updatedEntity, id) {
    const beforeUpdatedEntity = entities.find(entity => entity.id === id);
    return [
        ...entities.filter(entity => entity.id !== id),
        { ...beforeUpdatedEntity, ...updatedEntity }
    ]
}