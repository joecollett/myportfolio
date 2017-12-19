import { Component, Renderer2 } from '@angular/core';
import { query, trigger, state, animate, transition, style } from '@angular/animations';
import { Router, NavigationStart } from '@angular/router';

const fadeIn = [
  query(':leave', style({ position: 'absolute', left: 0, right: 0, opacity: 1 })),
  query(':enter', style({ position: 'absolute', left: 0, right: 0, opacity: 0 })),
  query(':leave', animate('1s', style({ opacity: 0 }))),
  query(':enter', animate('1s', style({ opacity: 1 })))
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  /* Allow CSS in this component to cascade down to child components */
  animations: [
    trigger('routerAnimations', [
      transition('* => *', fadeIn)
    ])
  ]  
})

export class AppComponent {
  previousUrl: string;
  
   constructor(private renderer: Renderer2, private router: Router) {
     this.router.events
       .subscribe((event) => {
         if (event instanceof NavigationStart) {
           if (this.previousUrl) {
             this.renderer.removeClass(document.body, this.previousUrl);
           }
           let currentUrlSlug = event.url.slice(1)
           if (currentUrlSlug) {
             this.renderer.addClass(document.body, currentUrlSlug);
           }
           this.previousUrl = currentUrlSlug;
         }
       });
  
   }  
  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}



