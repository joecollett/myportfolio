import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../animations/index';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  ,
})
export class WorkComponent implements OnInit {
  workItems:Observable<any>;
  dateAdded: string = 'dateAdded';
  
  constructor(public db: AngularFireDatabase) { 
    const workRef = db.list<any>('work').valueChanges();
    this.workItems = workRef;
  }

  ngOnInit() { 
    
  }
  convertUrl(input){
    return input.replace(/[^a-z0-9]/gi,'').toLowerCase();
  }

}
