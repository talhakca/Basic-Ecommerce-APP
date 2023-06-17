import { createReducer, on } from "@ngrx/store";
import { DistributorWithRelations } from "src/app/features/shared/sdk/models";
import * as DistributorAction from './distributor-data-store.actions';


export const featureKey = 'distKey';

export interface DistributorState {
    distributors: DistributorWithRelations[];
    isLoading: boolean;
}

/* Initial values */
export const initialState: DistributorState = {
    distributors: [],
    isLoading: false
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
            Error,
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
        isLoading: true
    })),
    on(DistributorAction.CreateDistributorsFailure, (state, action) => {
        return {
            ...state,
            Error,
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
            Error,
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
        const updatedDistributorId = action.payload.id;
        const updatedDistributor = action.payload.updatedDistributor;
        const updatedDistributors = state.distributors.map(distributor => {
            if (distributor.id === updatedDistributorId) {
                return {
                    ...distributor,
                    ...updatedDistributor
                };
            }
            return distributor;
        });
        return {
            ...state,
            distributors: updatedDistributors
        }
    }),
    on(DistributorAction.UpdateDistributorsFailure, (state, action) => {
        return {
            ...state,
            Error,
            isLoading: false,
        }
    }),


)