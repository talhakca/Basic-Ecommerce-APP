import { Component, Input } from '@angular/core';
import { HeadingComponentConfig } from '../../utils/heading';
import { Tag } from '../../utils/tag';
import { TagListDirectionMode } from '../../utils/tag-list/tag-list-direction-mode.enum';

@Component({
  selector: 'rappider-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class RappiderTagListComponent {
  @Input() titles: HeadingComponentConfig[];
  @Input() items: Tag[];
  @Input() directionMode: TagListDirectionMode;
}
