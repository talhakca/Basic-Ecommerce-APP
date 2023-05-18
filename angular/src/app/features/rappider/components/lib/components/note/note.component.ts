import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  ButtonComponentConfig,
  ButtonType,
  HeadingComponentConfig,
  Tag,
  ButtonSize,
  RichTextEditorComponentConfig,
  NoteComponentAdditionalButtonClickOutput,
} from '../../utils';

@Component({
  selector: 'rappider-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class RappiderNoteComponent implements OnInit, OnChanges {
  /* data to emit */
  @Input() data: any;
  @Input() tag: Tag;
  @Input() title: HeadingComponentConfig;
  @Input() subtitle: HeadingComponentConfig;
  @Input() saveButton: ButtonComponentConfig;
  @Input() cancelButton: ButtonComponentConfig;
  @Input() additionalButtons: ButtonComponentConfig[];
  @Input() richTextEditor: RichTextEditorComponentConfig;
  @Input() richTextEditorVisibility: boolean;
  @Input() content: string;

  @Output() richTextEditorVisibilityChange = new EventEmitter();
  @Output() saveButtonClick = new EventEmitter();
  @Output() cancelButtonClick = new EventEmitter();
  @Output() additionalButtonClick =
    new EventEmitter<NoteComponentAdditionalButtonClickOutput>();

  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.saveButton) {
      this.saveButton = {
        text: 'Save',
        type: ButtonType.Primary,
        size: ButtonSize.Small,
      };
    }

    if (!this.cancelButton) {
      this.cancelButton = {
        text: 'Cancel',
        type: ButtonType.Default,
        size: ButtonSize.Small,
      };
    }
  }

  onSave() {
    this.saveButtonClick.emit(this.content);
  }

  onCancel() {
    this.cancelButtonClick.emit();
  }

  onAdditionalButtonClick(additionalButton: ButtonComponentConfig) {
    this.additionalButtonClick.emit({
      additionalButton: additionalButton,
      data: this.data,
    });
  }
}
