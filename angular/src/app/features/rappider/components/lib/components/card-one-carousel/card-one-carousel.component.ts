import { transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  ButtonComponentConfig,
  ButtonShape,
  CardOneButtonOutput,
  CardOneComponentConfig,
  cardOneCarouselLeftSlideAnimation,
  cardOneCarouselRightSlideAnimation,
  HeadingComponentConfig,
  IconType,
} from '../../utils';

@Component({
  selector: 'rappider-card-one-carousel',
  templateUrl: './card-one-carousel.component.html',
  styleUrls: ['./card-one-carousel.component.scss'],
  animations: [
    trigger('carouselSlide', [
      transition(':increment', cardOneCarouselRightSlideAnimation),
      transition(':decrement', cardOneCarouselLeftSlideAnimation),
    ]),
  ],
})
export class RappiderCardOneCarouselComponent implements OnInit, OnChanges {
  /**
   * data to emit
   *
   * @type {*}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() data: any;

  /**
   * data for list
   *
   * @type {CardOneComponentConfig[]}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() listData: CardOneComponentConfig[];

  /**
   * heading of the list
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() listHeading: HeadingComponentConfig;

  /**
   * button located in top-right of the card
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() headerButton: ButtonComponentConfig;

  /**
   * carousel next button
   * default: > icon
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() nextButton: ButtonComponentConfig;

  /**
   * carousel back button
   * default: < icon
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() backButton: ButtonComponentConfig;

  /**
   * item count of per carousel page
   *
   * @type {number}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() slidesPerView: number;

  /**
   * visibilty of caruosel pagination dots
   *
   * @type {boolean}
   * @memberof RappiderCardOneCarouselComponent
   */
  @Input() isCarouselPaginatorVisible: boolean;

  @Output() cardOneClick = new EventEmitter();
  @Output() cardOneAdditionalButtonClick =
    new EventEmitter<CardOneButtonOutput>();
  @Output() cardOneImageButtonClick = new EventEmitter<CardOneButtonOutput>();
  @Output() headerButtonClick = new EventEmitter<CardOneButtonOutput>();

  displayedData = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.initDefaults();
    this.setDisplayedData();
  }

  ngOnChanges(): void {
    this.initDefaults();
    this.setDisplayedData();
  }

  initDefaults() {
    if (!this.nextButton) {
      this.nextButton = {
        icon: {
          name: 'right',
          type: IconType.NgZorro,
        },
        shape: ButtonShape.Circle,
      };
    }

    if (!this.backButton) {
      this.backButton = {
        icon: {
          name: 'left',
          type: IconType.NgZorro,
        },
        shape: ButtonShape.Circle,
      };
    }

    if (this.slidesPerView == null) {
      this.slidesPerView = 4;
    }

    if (this.isCarouselPaginatorVisible == null) {
      this.isCarouselPaginatorVisible = false;
    }
  }

  /**
   * slices listData by slidesPerView value and assigns to displayedData
   *
   * @memberof RappiderCardOneCarouselComponent
   */
  setDisplayedData() {
    for (let i = 0; i < this.listData.length; i += this.slidesPerView) {
      this.displayedData.push(this.listData.slice(i, i + this.slidesPerView));
    }
  }

  onClickHeaderButton(button: ButtonComponentConfig) {
    this.headerButtonClick.emit({ button: button, data: this.data });
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

  handleDotClass(index: number) {
    return index === this.currentIndex ? 'dot dot-active' : 'dot';
  }

  onClickDot(index: number) {
    this.currentIndex = index;
  }

  onClickBack() {
    if (0 < this.currentIndex) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.displayedData.length - 1;
    }
  }

  onClickNext() {
    if (this.listData.length / this.slidesPerView > this.currentIndex + 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }
}
