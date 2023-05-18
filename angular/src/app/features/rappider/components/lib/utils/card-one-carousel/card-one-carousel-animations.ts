import { animate, group, query, style } from '@angular/animations';

export const cardOneCarouselRightSlideAnimation = [
  group([
    query(
      ':leave',
      [
        style({ transform: 'translateX(0)', position: 'absolute' }),
        animate('.5s', style({ transform: 'translateX(-100%)' })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ transform: 'translateX(100%)' }),
        animate('.5s 100ms', style({ transform: 'translateX(0%)' })),
      ],
      { optional: true }
    ),
  ]),
];

export const cardOneCarouselLeftSlideAnimation = [
  group([
    query(
      ':leave',
      [
        style({ transform: 'translateX(0)', position: 'absolute' }),
        animate('.5s', style({ transform: 'translateX(100%)' })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ transform: 'translateX(-100%)' }),
        animate('.5s 100ms', style({ transform: 'translateX(0%)' })),
      ],
      { optional: true }
    ),
  ]),
];
