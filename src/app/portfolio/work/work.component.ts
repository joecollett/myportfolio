import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as _ from 'lodash'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  workItems:Observable<any>;
  dateAdded: string = 'dateAdded';
  title = 'Portfolio';
  description = 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur massa ut lectus ullamcorper';
  
  constructor(public db: AngularFireDatabase) { 
    const workRef = db.list<any>('work').valueChanges();
    this.workItems = workRef;
  }

  ngOnInit() { 
    
  }

}
