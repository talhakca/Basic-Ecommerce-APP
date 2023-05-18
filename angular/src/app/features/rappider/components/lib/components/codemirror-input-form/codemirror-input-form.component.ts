import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  ButtonComponentConfig,
  PRIMARY_SAVE_BUTTON_CONFIG,
} from '../../utils/button';
import {
  CodeMirrorSettings,
  CODEMIRROR_JSON_SETTINGS,
} from '../../utils/codemirror';

@Component({
  selector: 'rappider-code-editor-input-form',
  templateUrl: './codemirror-input-form.component.html',
  styleUrls: ['./codemirror-input-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RappiderCodemirrorInputFormComponent implements OnInit {
  @Input() codemirrorTitle: string;
  /* button config input */
  @Input() button: ButtonComponentConfig;
  /* codemirror settings */
  @Input() codemirrorSettings: CodeMirrorSettings = CODEMIRROR_JSON_SETTINGS;
  /* any content written in codemirror component */
  @Input() codemirrorContent: string;
  /* additional buttons in codemirror toolbar */
  @Input() codemirrorAdditionalButtons: ButtonComponentConfig[];

  @Output() buttonClick = new EventEmitter<string>();
  @Output() codemirrorAdditionalButtonClick =
    new EventEmitter<ButtonComponentConfig>();

  ngOnInit(): void {
    this.setDefaultButton();
  }

  /**
   * set default button if there is no button input
   *
   * @memberof RappiderCodemirrorInputFormComponent
   */
  setDefaultButton() {
    if (!this.button) {
      this.button = PRIMARY_SAVE_BUTTON_CONFIG;
    }
  }

  /**
   * emits codemirror's content when the button is clicked
   *
   * @memberof RappiderCodemirrorInputFormComponent
   */
  onButtonClick() {
    this.buttonClick.emit(this.codemirrorContent);
  }

  onAdditionalButtonClick(button: ButtonComponentConfig) {
    this.codemirrorAdditionalButtonClick.emit(button);
  }
}
