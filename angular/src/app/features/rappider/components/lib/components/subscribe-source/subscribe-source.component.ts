import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { InputGroupComponentConfig } from '../../utils/input-group/input-group-component-config.interface';
import { ParagraphComponentConfig } from '../../utils/paragraph/paragraph-component-config.interface';

@Component({
  selector: 'rappider-subscribe-source',
  templateUrl: './subscribe-source.component.html',
  styleUrls: ['./subscribe-source.component.scss'],
})
export class RappiderSubscribeSourceComponent {
  /* heading for subscribe source */
  @Input() heading: HeadingComponentConfig;
  /* content for subscribe source  */
  @Input() text: ParagraphComponentConfig;
  /* input group component config */
  @Input() inputGroup: InputGroupComponentConfig;
  /* input value */
  @Input() value: string;
}
