import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { CardOneComponentConfig } from '../../utils/card-one/card-one-component-config.interface';
import { CardOneButtonOutput } from '../../utils';
import { CarouselBreakpoint } from '../../utils/alternative-carousel/carousel-breakpoint.interface';
import {
  CarouselAutoplayOptions,
  CarouselPaginationOptions,
} from '../../utils/alternative-carousel';

@Component({
  selector: 'rappider-alternative-carousel',
  templateUrl: './alternative-carousel.component.html',
  styleUrls: ['./alternative-carousel.component.scss'],
})
export class RappiderAlternativeCarouselComponent implements OnInit, OnChanges {
  @Input() cardItems: CardOneComponentConfig[];
  @Input() slidesPerView: number;
  @Input() spaceBetween: number;
  @Input() navigation: boolean;
  @Input() pagination: CarouselPaginationOptions;
  @Input() loop: boolean;
  @Input() mousewheel: boolean;
  @Input() autoplay: CarouselAutoplayOptions;
  @Input() breakpoints: CarouselBreakpoint;

  @Output() cardOneClick = new EventEmitter();
  @Output() cardOneAdditionalButtonClick =
    new EventEmitter<CardOneButtonOutput>();
  @Output() cardOneImageButtonClick = new EventEmitter<CardOneButtonOutput>();

  ngOnInit() {
    this.initDefault();
  }

  ngOnChanges() {
    this.initDefault();
  }

  initDefault() {
    if (this.breakpoints === null) {
      this.breakpoints = {
        '0': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '600': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '900': {
          slidesPerView: this.slidesPerView - 1,
          spaceBetween: 20,
        },
        '1200': {
          slidesPerView: this.slidesPerView,
          spaceBetween: 20,
        },
      };
    }
  }

  onClickCardOneAdditionalButton(event: CardOneButtonOutput) {
    this.cardOneAdditionalButtonClick.emit(event);
  }

  onClickCardOneImageButton(event: CardOneButtonOutput) {
    this.cardOneImageButtonClick.emit(event);
  }

  onClickCardOne(event: any) {
    this.cardOneClick.emit(event);
  }
}
