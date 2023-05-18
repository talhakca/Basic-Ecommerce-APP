import { Component, TemplateRef, Input } from '@angular/core';

interface TabsInterface {
  template: TemplateRef<any>;
}

@Component({
  selector: 'rappider-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss'],
})
export class RappiderTabsetComponent {
  /* rappider-tabset array as templateref */
  @Input() tabs: Array<TabsInterface>;
}
