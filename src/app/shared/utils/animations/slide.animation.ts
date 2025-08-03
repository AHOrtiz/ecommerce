
import { animate, style, transition, trigger } from '@angular/animations';

export const slideAnimation = trigger('carousalAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(
          '300ms ease-in',
          style({
            transform: 'translateX(0%)',
          })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({
            transform: 'translateX(-100%)',
          })
        ),
      ]),
    ])
