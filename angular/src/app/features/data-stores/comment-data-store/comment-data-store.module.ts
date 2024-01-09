import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CommentDataStoreEffects } from "./state/comment-data-store.effects";
import * as fromCommentDataStore from './state/comment-data-store.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        StoreModule.forFeature(
            fromCommentDataStore.featureKey,
            fromCommentDataStore.reducer,
            { initialState: fromCommentDataStore.initialState }
        ),
        EffectsModule.forFeature([CommentDataStoreEffects]),
    ],
    exports: [StoreModule, EffectsModule],
})
export class CommentDataStoreModule { }