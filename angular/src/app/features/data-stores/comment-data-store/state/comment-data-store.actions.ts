import { createAction, props } from "@ngrx/store";
import { CommentWithRelations, NewComment } from "src/app/features/shared/sdk/models";

export enum ActionTypes {

    CreateComment = '[COMMENTDATASTORE] CreateComment',
    CreateCommentSuccessful = '[COMMENTDATASTORE] CreateCommentSuccessful',
    CreateCommentFailure = '[COMMENTDATASTORE] CreateCommentFailure',
    UpdateComment = '[COMMENTDATASTORE] UpdateComment',
    UpdateCommentSuccessful = '[COMMENTDATASTORE] UpdateCommentSuccessful',
    UpdateCommentFailure = '[COMMENTDATASTORE] UpdateCommentFailure'
}

export const UpdateComment = createAction(ActionTypes.UpdateComment, props<{ payload: { id: string, comment: Partial<CommentWithRelations>, productId: string } }>());
export const UpdateCommentSuccessful = createAction(ActionTypes.UpdateCommentSuccessful, props<{ payload: { id: string, comment: CommentWithRelations, productId: string } }>());
export const UpdateCommentFailure = createAction(ActionTypes.UpdateCommentFailure, props<{ error: any }>());
export const CreateComment = createAction(ActionTypes.CreateComment, props<{ payload: { comment: NewComment } }>());
export const CreateCommentSuccessful = createAction(ActionTypes.CreateCommentSuccessful, props<{ payload: { comment: CommentWithRelations } }>());
export const CreateCommentFailure = createAction(ActionTypes.CreateCommentFailure, props<{ error: any }>());

