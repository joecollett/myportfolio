import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../service/auth.service';
import { SharedService } from '../../shared/services/shared.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit, AfterViewInit {
  home:any;
  spinner:any;
  words:any;
  mobileWidth;
  runAnimation1 = false;
  runAnimation2 = false;
  runAnimation3 = false;
  runAnimation4 = false;
  runAnimation5 = false;

  constructor(public db: AngularFireDatabase, private auth: AuthService, public sharedService: SharedService) {
    const homeRef = db.object<any>('home');
  }

  ngOnInit() {
    this.sharedService.resizeWidth.subscribe(data => {
      this.mobileWidth = data;
    });
    document.getElementById('body').classList.add("home");
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
    }, 1200);   
    setTimeout(() => {
      this.runAnimation4 = true;
    }, 100);      
    setTimeout(() => {
      this.runAnimation5 = true;
    }, 100);                
  }

}
