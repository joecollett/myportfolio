import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';
import { style, state, animate, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(200, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({opacity:0})) 
      ])
    ])
  ]  
})
export class NavbarComponent implements OnInit {

  status:any;
  mobileWidth: Boolean;
  open = false;
  @Input() background: string;

  constructor(public authService: AuthService, private router: Router, public sharedService: SharedService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobileWidth = this.sharedService.inMobileView(window.innerWidth);
  }  

  logout() {
    this.authService.logout();
  }  

  ngOnInit() {
    this.mobileWidth = this.sharedService.inMobileView(window.innerWidth);
  }

}
