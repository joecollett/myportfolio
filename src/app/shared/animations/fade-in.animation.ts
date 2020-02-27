import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({ opacity: 0,  }),

            // animation and styles at end of transition
            animate('0.4s 1.8s ease-in-out', style({ opacity: 1 }))
        ]),
        transition(':leave', [
            
            // styles at start of transition
            style({ opacity: 1 }),

            // animation and styles at end of transition
            animate('0.4s 0s ease-in-out', style({ opacity: 0 }))
        ])                            
    ]);