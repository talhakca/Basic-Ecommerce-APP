import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { marked } from 'marked';
import { fromEvent, Subscription } from 'rxjs';

import { BorderConfig } from '../../../../utils/shared/border/border.interface';
import { SizeConfig } from '../../../../utils/shared/size/size.interface';

import {
  MONACO_EDITOR_CONFIG,
  MonacoEditorConfig,
} from '../../monaco-editor.config';
import { MonacoEditorModel } from '../../monaco-editor.types';

// eslint-disable-next-line no-var
declare var monaco: any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let loadedMonaco = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let loadPromise: Promise<void>;

@Component({
  selector: 'rappider-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonacoEditorComponent),
      multi: true,
    },
  ],
})
export class MonacoEditorComponent
  implements AfterViewInit, OnDestroy, ControlValueAccessor
{
  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef;
  @Input() sizeSettings?: SizeConfig;
  @Input() borderSettings: BorderConfig;
  @Input() pasteItemFunction?: (event: any, editor: any) => void;
  @Input() showToolbar? = false;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('options')
  set options(options: any) {
    this._options = Object.assign(
      {},
      this.editorConfig.defaultOptions,
      options
    );
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(options);
    }
  }

  get options(): any {
    return this._options;
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('model')
  set model(model: MonacoEditorModel) {
    this.options.model = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this.options);
    }
  }

  @Output() init = new EventEmitter<any>();

  /* in order to show a markdown preview, we will set the value if the language is markdown */
  markDownPreviewValue = '';
  markdownMode: string = null;

  markDownModeRadioConfig = [
    {
      value: 'markdown',
      label: 'Markdown',
    },
    {
      value: 'markdownPreview',
      label: 'Preview',
    },
    {
      value: 'markdownAndPreview',
      label: 'Markdown & Preview',
    },
  ];

  customizedPasteHandleInitialized = false;

  private _value = '';
  private _editor: any;
  private _options: any;
  private _windowResizeSubscription: Subscription;

  propagateChange = (_: any) => {};
  onTouched = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(
    private zone: NgZone,
    @Inject(MONACO_EDITOR_CONFIG) private editorConfig: MonacoEditorConfig
  ) {}

  ngAfterViewInit(): void {
    if (loadedMonaco) {
      // Wait until monaco editor is available
      loadPromise.then(() => {
        this.initMonaco(this._options);
      });
    } else {
      loadedMonaco = true;
      loadPromise = new Promise<void>((resolve: any) => {
        const baseUrl =
          (this.editorConfig.baseUrl || './assets') + '/monaco-editor/min/vs';
        if (typeof (<any>window).monaco === 'object') {
          resolve();
          return;
        }
        const onGotAmdLoader: any = () => {
          // Load monaco
          (<any>window).require.config({ paths: { vs: `${baseUrl}` } });
          (<any>window).require(['vs/editor/editor.main'], () => {
            if (typeof this.editorConfig.onMonacoLoad === 'function') {
              this.editorConfig.onMonacoLoad();
            }
            this.initMonaco(this._options);
            resolve();
          });
        };

        // Load AMD loader if necessary
        if (!(<any>window).require) {
          const loaderScript: HTMLScriptElement =
            document.createElement('script');
          loaderScript.type = 'text/javascript';
          loaderScript.src = `${baseUrl}/loader.js`;
          loaderScript.addEventListener('load', onGotAmdLoader);
          document.body.appendChild(loaderScript);
        } else {
          onGotAmdLoader();
        }
      });

      /* Paste handling for markdown paste image  */
      if (
        this.options?.language === 'markdown' &&
        !this.customizedPasteHandleInitialized
      ) {
        this.addPasteHandler();
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ngOnDestroy() {
    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }
    if (this._editor) {
      this._editor.dispose();
      this._editor = undefined;
    }
  }

  writeValue(value: any): void {
    this._value = value || '';
    // Fix for value change while dispose in process.
    setTimeout(() => {
      if (this._editor && !this.options.model) {
        this._editor.setValue(this._value);
        this.setMarkDownPreviewValue(this._value);
      }
    });
  }

  setMarkDownPreviewValue(text: string) {
    if (this.options?.language === 'markdown') {
      const markdownTextWithLineBreaks = text;
      this.markDownPreviewValue = marked.parse(markdownTextWithLineBreaks, {
        breaks: true,
      });
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  insertTextToCursor(text: string) {
    const selection = this._editor.getSelection();
    const op = { range: selection, text: text, forceMoveMarkers: true };
    this._editor.executeEdits('my-source', [op]);

    this._editor.trigger('keyboard', 'type', { text: text });
  }

  addPasteHandler() {
    window.addEventListener('paste', (pasteEvent: any) => {
      this.pasteItemFunction(pasteEvent, this._editor);
    });
  }

  onMarkdownPreviewModeChange(event) {
    setTimeout(() => {
      this._editor.layout();
      this._editor.render();
    }, 100);
    setTimeout(() => {
      this._editor.layout();
      this._editor.render();
    }, 500);
  }

  protected initMonaco(options: any): void {
    const hasModel = !!options.model;
    if (hasModel) {
      const model = monaco.editor.getModel(options.model.uri || '');
      if (model) {
        options.model = model;
        options.model.setValue(this._value);
      } else {
        options.model = monaco.editor.createModel(
          options.model.value,
          options.model.language,
          options.model.uri
        );
      }
    }

    if (!this._editor) {
      this._editor = monaco.editor.create(
        this._editorContainer.nativeElement,
        options
      );
    }

    if (!hasModel) {
      this._editor.setValue(this._value);
      this.setMarkDownPreviewValue(this._value);
    }

    this._editor.onDidPaste((event: any) => {
      console.log('monaco editor something is pasted ');
      console.log(event);
    });

    this._editor.onDidChangeModelContent((e: any) => {
      const value = this._editor.getValue();

      // value is not propagated to parent when executing outside zone.
      this.zone.run(() => {
        this.propagateChange(value);
        this._value = value;
        this.setMarkDownPreviewValue(this._value);
      });
    });

    this._editor.onDidBlurEditorWidget(() => {
      this.onTouched();
    });

    // refresh layout on resize event.
    if (this._windowResizeSubscription) {
      this._windowResizeSubscription.unsubscribe();
    }
    this._windowResizeSubscription = fromEvent(window, 'resize').subscribe(() =>
      this._editor.layout()
    );
    this.init.emit(this._editor);
  }
}
