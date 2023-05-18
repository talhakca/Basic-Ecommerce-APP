import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../utils/comment/comment.interface';

@Component({
  selector: 'rappider-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class RappiderCommentComponent {
  /**
   *Displays the omments section
   *
   * @type {Comment[]}
   * @memberof RappiderCommentComponent
   */
  @Input() comments: Comment[];
  /**
   *Displays the like click
   *
   * @memberof RappiderCommentComponent
   */
  @Output() likeClick = new EventEmitter<Comment>();
  /**
   *Displays the dislike click
   *
   * @memberof RappiderCommentComponent
   */
  @Output() dislikeClick = new EventEmitter<Comment>();
  /**
   *Displays the reply to click
   *
   * @memberof RappiderCommentComponent
   */
  @Output() replyToClick = new EventEmitter<Comment>();

  initialLevel = 0;

  onLikeClick(likedNode: Comment) {
    this.likeClick.emit(likedNode);
  }

  onDislikeClick(dislikedNode: Comment) {
    this.dislikeClick.emit(dislikedNode);
  }

  onReplyToClick(replyToNode: Comment) {
    this.replyToClick.emit(replyToNode);
  }
}
