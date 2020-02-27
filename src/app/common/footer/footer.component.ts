import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible'}), 
        animate(300, style({opacity: 1}))
      ]),        
    ])
  ]   
})
export class FooterComponent implements OnInit, AfterViewInit {

  constructor() { }
  animation = false;

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animation = true;
    }, 1200);
  }

}
