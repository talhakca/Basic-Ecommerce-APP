import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NoteComponentConfig,
  NoteListSaveButtonClickOutput,
  NoteListAdditionalButtonClickOutput,
  NoteComponentAdditionalButtonClickOutput,
} from '../../utils';

@Component({
  selector: 'rappider-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class RappiderNoteListComponent {
  @Input() items: NoteComponentConfig[];

  @Output() saveButtonClick = new EventEmitter<NoteListSaveButtonClickOutput>();
  @Output() cancelButtonClick = new EventEmitter<number>();
  @Output() additionalButtonClick =
    new EventEmitter<NoteListAdditionalButtonClickOutput>();

  onSave(content: string, index: number) {
    this.saveButtonClick.emit({ content: content, index: index });
  }

  onCancel(index: number) {
    this.cancelButtonClick.emit(index);
  }

  onAdditionalButtonClick(
    additionalButtonClickOutput: NoteComponentAdditionalButtonClickOutput,
    index: number
  ) {
    this.additionalButtonClick.emit({
      noteComponentAdditionalButtonClickOutput: additionalButtonClickOutput,
      index: index,
    });
  }
}
