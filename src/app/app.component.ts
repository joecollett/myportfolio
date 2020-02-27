import { Component, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { HostListener,} from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
})

export class AppComponent implements OnInit {
  previousUrl: string;
  loading = false;
   constructor(private renderer: Renderer2, private router: Router, public sharedService: SharedService) {
     this.router.events
       .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = false;
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1);
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

  ngOnInit(){
    this.sharedService.setResize(window.innerWidth);
  } 

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sharedService.setResize(window.innerWidth);
  }   

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}



