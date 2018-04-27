import { Component, Renderer2 } from '@angular/core';
import { query, trigger, state, animate, transition, style } from '@angular/animations';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})

export class AppComponent {
  previousUrl: string;
  loading = true;
   constructor(private renderer: Renderer2, private router: Router) {
     this.router.events
       .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
            if(currentUrlSlug !== "home"){
              this.renderer.removeClass(document.body, "home");
            }
          }
          this.previousUrl = currentUrlSlug;
        }
        if (event instanceof NavigationEnd) {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          setTimeout(()=>{   
            this.loading = false;
           },1500);
        }        
       });
   }  
  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}



