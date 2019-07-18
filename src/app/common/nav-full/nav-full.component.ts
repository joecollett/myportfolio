import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav-full',
  templateUrl: './nav-full.component.html',
  styleUrls: ['./nav-full.component.scss']
})
export class NavFullComponent implements OnInit {

  status:any;
  
  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  checkStatus(status){
    if(status === true){
      document.getElementById("myNav").style.width = "100%";
    } else {
      document.getElementById("myNav").style.width = "0%";
    }
  }
  newStatus(status: boolean){
    this.status = status;
    this.checkStatus(status);
  }
}
