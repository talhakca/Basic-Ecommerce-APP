import {
  Component,
  Input,
  OnChanges,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ADVANCED_RICH_TEXT_EDITOR_SETTINGS } from '../../utils/rich-text-editor/advanced-rich-text-editor-settings.variable';
import { RichTextEditorTheme } from '../../utils/rich-text-editor/rich-text-editor-theme.enum';

@Component({
  selector: 'rappider-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RappiderHtmlViewerComponent implements OnInit, OnChanges {
  @Input() html: string;
  @Input() skeletonMode: boolean;
  @Input() isLoading: boolean;

  RichTextEditorTheme = RichTextEditorTheme;
  safeHTML: SafeHtml;
  ADVANCED_RICH_TEXT_EDITOR_SETTINGS = ADVANCED_RICH_TEXT_EDITOR_SETTINGS;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }

  ngOnChanges() {
    this.safeHTML = this.sanitizer.bypassSecurityTrustHtml(this.html);
  }
}
