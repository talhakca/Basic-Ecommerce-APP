import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rappider-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class RappiderModalComponent {
  /* title */
  @Input() title: string;
  /* visibility status */
  @Input() visible = false;
  /* ok text */
  @Input() okText: string;
  /* cancel text */
  @Input() cancelText: string;
  /* modal size */
  @Input() width: string;
  /* ok button disabled */
  @Input() okDisabled: boolean;
  /* cancel button disabled */
  @Input() cancelDisabled: boolean;
  /* footer */
  @Input() footer: unknown;
  /* ok button loading state */
  @Input() okLoading: boolean;
  /* is ok button danger */
  @Input() okDanger: boolean;
  /* Whether show mask or not */
  @Input() mask = false;
  /* Whether to close the modal dialog when the mask is clicked */
  @Input() maskClosable = false;
  @Input() className: string;
  @Input() bodyStyle: any;
  @Input() closeIconVisibility = true;
  /* ok click */
  @Output() okClick = new EventEmitter();
  /* cancel click */
  @Output() cancelClick = new EventEmitter();
  @Output() visibleChange = new EventEmitter<boolean>();

  onOkClick() {
    this.okClick.emit();
  }

  onCancelClick() {
    this.cancelClick.emit();
    this.visibleChange.emit(false);
  }
}
