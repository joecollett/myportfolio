import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status:any;

  constructor(public authService: AuthService, private router: Router) {

  }

  logout() {
    this.authService.logout();
  }  

  ngOnInit() {

  }

}
