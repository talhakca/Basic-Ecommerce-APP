import { Component, Inject, Input } from '@angular/core';
import { fromEvent } from 'rxjs';

// import { BaseEditorComponent } from '../monaco-editor/base-editor';
import {
  MONACO_EDITOR_CONFIG,
  MonacoEditorConfig,
} from '../../monaco-editor.config';
import { DiffEditorModel } from '../../monaco-editor.types';

import {
  AfterViewInit,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';

// eslint-disable-next-line no-var
declare var monaco: any;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let loadedMonaco = false;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let loadPromise: Promise<void>;

@Component({
  selector: 'rappider-monaco-diff-editor',
  templateUrl: './monaco-diff-editor.component.html',
  styleUrls: ['./monaco-diff-editor.component.scss'],
})
export class MonacoDiffEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer', { static: true }) _editorContainer: ElementRef;
  @Output() init = new EventEmitter<any>();

  private _editor: any;
  private _options: any;
  private _windowResizeSubscription: Subscription;

  _originalModel: DiffEditorModel;
  _modifiedModel: DiffEditorModel;

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
  @Input('originalModel')
  set originalModel(model: DiffEditorModel) {
    this._originalModel = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this.options);
    }
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('modifiedModel')
  set modifiedModel(model: DiffEditorModel) {
    this._modifiedModel = model;
    if (this._editor) {
      this._editor.dispose();
      this.initMonaco(this.options);
    }
  }

  constructor(
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

  protected initMonaco(options: any): void {
    if (!this._originalModel || !this._modifiedModel) {
      throw new Error(
        'originalModel or modifiedModel not found for ngx-monaco-diff-editor'
      );
    }

    this._originalModel.language =
      this._originalModel.language || options.language;
    this._modifiedModel.language =
      this._modifiedModel.language || options.language;

    const originalModel = monaco.editor.createModel(
      this._originalModel.code,
      this._originalModel.language
    );
    const modifiedModel = monaco.editor.createModel(
      this._modifiedModel.code,
      this._modifiedModel.language
    );

    this._editorContainer.nativeElement.innerHTML = '';
    const theme = options.theme;
    this._editor = monaco.editor.createDiffEditor(
      this._editorContainer.nativeElement,
      options
    );
    options.theme = theme;
    this._editor.setModel({
      original: originalModel,
      modified: modifiedModel,
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
