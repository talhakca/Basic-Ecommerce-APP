import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap, withLatestFrom } from "rxjs/operators";
import { CommentControllerService } from "src/app/features/shared/sdk/services";
import { NotificationService } from "src/app/features/shared/services";
import { CreateComment, CreateCommentFailure, CreateCommentSuccessful, UpdateComment, UpdateCommentFailure, UpdateCommentSuccessful } from "./comment-data-store.actions";

@Injectable()
export class CommentDataStoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private notificationService: NotificationService,
        private router: Router,
        private commentApi: CommentControllerService,

    ) { }


    createComment$ = createEffect(
        () => this.actions$.pipe(
            ofType(CreateComment),
            withLatestFrom(this.store.select(state => state.auth.user)),
            mergeMap(([action, user]) => this.commentApi.create({ body: { ...action.payload.comment, status: 'PENDING', userId: user.id } }).pipe(
                map((comment) => {
                    this.notificationService.createNotification('success', 'We have successfuly uploaded your comment. As soon as on of our staff reviews it, it will be published.', '');
                    return CreateCommentSuccessful({ payload: { comment: { ...comment, user: user } } });
                }),
                catchError((error) => [CreateCommentFailure({ error: 'Can not create comment!' })]),
            ))
        )
    );

    updateComment$ = createEffect(
        () => this.actions$.pipe(
            ofType(UpdateComment),
            mergeMap((action) => this.commentApi.updateById({ id: action.payload.id, body: action.payload.comment }).pipe(
                map((comment) => {
                    this.notificationService.createNotification('success', 'We have successfuly updated comment', '');
                    return UpdateCommentSuccessful({ payload: { id: action.payload.id, comment: comment, productId: action.payload.productId } });
                }),
                catchError((error) => [UpdateCommentFailure({ error: 'Can not update comment!' })])
            ))
        )
    );
}