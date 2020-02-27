import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible'}), 
        animate(300, style({opacity: 1}))
      ]),        
    ])
  ]      
})
export class AboutComponent implements OnInit, AfterViewInit {
  animation = false
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animation = true;
    }, 1200);
  }  

}
