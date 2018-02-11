import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
  }

}
