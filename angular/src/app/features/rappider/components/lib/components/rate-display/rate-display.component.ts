import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rappider-rate-display',
  templateUrl: './rate-display.component.html',
  styleUrls: ['./rate-display.component.scss'],
})
export class RappiderRateDisplayComponent {
  @Input() rate: number;
}
