import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible', transform: 'translateY(20%)'}), 
        animate(500, style({opacity: 1, transform: 'translateY(0%)'}))
      ]),        
    ]),
    trigger('justFade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible'}), 
        animate(500, style({opacity: 1}))
      ]),        
    ])       
  ]    
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() description: string;
  @Input() background: string;
  runAnimation1 = false;
  runAnimation2 = false;
  runAnimation3 = false;
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.runAnimation1 = true;
    }, 500);
    setTimeout(() => {
      this.runAnimation2 = true;
    }, 800);
    setTimeout(() => {
      this.runAnimation3 = true;
    }, 100);    
  }

}
