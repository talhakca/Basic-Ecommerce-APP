import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ToolbarConfig } from '../../utils/toolbar';

@Component({
  selector: 'rappider-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class RappiderToolbarComponent {
  @Input() displayBackButton = true;

  toolbarConfig = ToolbarConfig;

  constructor(private location: Location) {}

  onToolbarBackButtonClick() {
    this.location.back();
  }
}
