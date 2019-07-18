import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() newStatus = new EventEmitter<boolean>();
  status = false;
  constructor(public authService: AuthService, private router: Router) {
    
  }

  closeNav(status: boolean){
    status = false;
    this.newStatus.emit(status);
  }

}
