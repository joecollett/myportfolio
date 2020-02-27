import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';
import * as _ from 'lodash'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible'}), 
        animate(300, style({opacity: 1}))
      ]),        
    ])
  ]    
})
export class WorkComponent implements OnInit, AfterViewInit {
  workItems:Observable<any>;
  dateAdded: string = 'dateAdded';
  title = 'Portfolio';
  description = 'View some of my latest work';
  animation = false;
  
  constructor(public db: AngularFireDatabase) { 
    const workRef = db.list<any>('work').valueChanges();
    this.workItems = workRef;
  }

  ngOnInit() { 
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animation = true;
    }, 1200);
  }

}
