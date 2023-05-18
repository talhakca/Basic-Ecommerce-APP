import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'rappider-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss'],
})
export class RappiderGridContainerComponent {
  /* Takes input for display in grid system. cellTemplates for Template to display and width for
  column width  */
  @Input() cells: {
    cellTemplate: TemplateRef<any>;
    width: number;
  }[];
}
