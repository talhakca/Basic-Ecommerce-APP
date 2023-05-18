import {
  Component,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { SpinSize } from '../../utils/spin';

@Component({
  selector: 'rappider-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss'],
})
export class RappiderSpinComponent implements OnInit {
  @Input() delay: number;
  @Input() indicator: TemplateRef<void>;
  @Input() size: SpinSize;
  @Input() spinning: boolean;
  @Input() simple: boolean;
  @Input() tip: string;
  @Input() color: string;

  @HostBinding('style.--spin-background-color') backgroundColor;

  ngOnInit(): void {
    if (this.color) {
      this.backgroundColor = this.color;
    } else {
      this.backgroundColor = 'var(--primary-color)';
    }
  }
}
