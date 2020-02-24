import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status:any;
  mobileWidth: Boolean;
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
