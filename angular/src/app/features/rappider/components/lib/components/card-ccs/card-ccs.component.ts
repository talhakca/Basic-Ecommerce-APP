import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';
import { TextComponentConfig } from '../../utils/text/text-component-config.interface';

/* TODO: Add this component to the Rappider components */
@Component({
  selector: 'rappider-card-ccs',
  templateUrl: './card-ccs.component.html',
  styleUrls: ['./card-ccs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RappiderCardCcsComponent {
  /* data that will be passed and emitted by the item click */
  @Input() data: any;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* subtitles as array */
  @Input() subtitles: HeadingComponentConfig[];
  /* description */
  @Input() description: TextComponentConfig;
  /* image as cover picture, not the backgound cover but above the title */
  @Input() image: ImageComponentConfig;
  /* cover template instead of image, if you pass image input data, this input will not be displayed */
  @Input() thumbnailTemplate: TemplateRef<any>;
  /* first action button */
  @Input() firstActionButton: ButtonComponentConfig;
  /* second action button */
  @Input() secondActionButton: ButtonComponentConfig;
  /* third action button */
  @Input() thirdActionButton: ButtonComponentConfig;
  /* a color band that adds a colored div at the top of the card content */
  @Input() colorBand?: string;

  /* card item select/click */
  @Output() itemSelect = new EventEmitter<any>();
  /* action button click  */
  @Output() actionClick = new EventEmitter();

  actionClicked(button: ButtonComponentConfig) {
    this.actionClick.emit({ button: button, data: this.data });
  }

  itemClicked() {
    this.itemSelect.emit(this.data);
  }
}
