import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AuthService } from './../service/auth.service';
import { Observable } from 'rxjs/Observable';
import { fadeInAnimation } from '../animations/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  
})
export class HomeComponent implements OnInit {
  home:any;
  spinner:any;

  constructor(public db: AngularFireDatabase, private auth: AuthService) {
    const homeRef = db.object<any>('home');
    this.home = homeRef.valueChanges().subscribe(
      home => this.home = home
    );  
  }

  ngOnInit() {
  }

}
