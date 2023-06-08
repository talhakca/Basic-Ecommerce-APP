import { Component, OnInit } from '@angular/core';
import { CommentStatus } from './utils/comment-type';
import { AppState } from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
import { UpdateComment } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { Store } from '@ngrx/store';
import { CommentWithRelations } from 'src/app/features/shared/sdk/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comments-status',
  templateUrl: './comments-status.component.html',
  styleUrls: ['./comments-status.component.scss']
})
export class CommentsStatusComponent implements OnInit {

  statusOptions = [
    {
      key: 'Approved',
      value: CommentStatus.Approved
    },
    {
      key: 'Declined',
      value: CommentStatus.Declined
    },
    {
      key: 'Pending',
      value: CommentStatus.Pending
    }
  ];

  comments: CommentWithRelations[];
  subscriptions: Subscription[];

  constructor(
    private store: Store<{ app: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToComments()
    ]
  }

  subscribeToComments() {
    return this.store.select(state => state.app.products).subscribe(products => {
      if (products?.length) {
        this.comments = products.reduce((acc, curr) => {
          if (curr.comments?.length) {
            acc.push(...curr.comments.map(comment => ({ ...comment, productName: curr.name })));
          }
          return acc;
        }, [])
      } else {
        this.comments = [];
      }
    })
  }

  onStatusChange(comment, status: CommentStatus) {
    this.store.dispatch(UpdateComment({ payload: { id: comment.id, comment: { status: status }, productId: comment.productId } }))
  }

}
