import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AuthService } from '../../service/auth.service';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home:any;
  spinner:any;
  words:any;
  mobileWidth;

  constructor(public db: AngularFireDatabase, private auth: AuthService, public sharedService: SharedService) {
    const homeRef = db.object<any>('home');
  }

  ngOnInit() {
    this.sharedService.resizeWidth.subscribe(data => {
      this.mobileWidth = data;
    });
    document.getElementById('body').classList.add("home");
  }

}
