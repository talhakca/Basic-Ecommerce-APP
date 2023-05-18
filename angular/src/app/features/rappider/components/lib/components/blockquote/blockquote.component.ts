import { Component, Input } from '@angular/core';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

@Component({
  selector: 'rappider-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss'],
})
export class RappiderBlockquoteComponent {
  // content of blockquote
  @Input() quote: TextComponentConfig;
  // footer of blockquote
  @Input() footer: TextComponentConfig;
}
