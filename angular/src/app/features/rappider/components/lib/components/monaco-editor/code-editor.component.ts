import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { mockCode } from './mock.code';

import { renderMarkdown } from 'monaco-editor/esm/vs/base/browser/markdownRenderer';

@Component({
  selector: 'rappider-monaco-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, OnChanges {
  /* range : [ startLine, startColumn, endLine, endColumn ] */
  @Input() restrictions?: any[] = [
    {
      range: [1, 7, 1, 12], // Range of Util Variable name
      label: 'utilName',
      validate: function (currentlyTypedValue, newRange, info) {
        const noSpaceAndSpecialChars = /^[a-z0-9A-Z]*$/;
        return noSpaceAndSpecialChars.test(currentlyTypedValue);
      },
    },
    {
      range: [3, 1, 3, 1], // Range of Function definition
      allowMultiline: true,
      label: 'funcDefinition',
    },
  ];

  @Input() theme?: string = 'dark';

  code = mockCode;
  htmlMarkdown: string;

  constructor(private nzConfigService: NzConfigService) {}

  ngOnInit(): void {
    this.applyTheme();
  }

  ngOnChanges() {
    this.htmlMarkdown = renderMarkdown({
      value: this.code,
    }).innerHTML;
  }

  applyTheme() {
    const defaultEditorOption =
      this.nzConfigService.getConfigForComponent('codeEditor')
        ?.defaultEditorOption || {};
    this.nzConfigService.set('codeEditor', {
      defaultEditorOption: {
        ...defaultEditorOption,
        theme: this.theme === 'dark' ? 'vs-dark' : 'vs',
      },
    });
  }
}
