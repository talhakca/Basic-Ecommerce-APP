import { createReducer } from "@ngrx/store";
import { CommentWithRelations } from "src/app/features/shared/sdk/models";

export const featureKey = 'commentKey';

export interface CommentState {
    comments: CommentWithRelations[],
    isLoading: boolean;
}

export const initialState: CommentState = {
    comments: [],
    isLoading: false
};

export const reducer = createReducer(
    initialState,
)