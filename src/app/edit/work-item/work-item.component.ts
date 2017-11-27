import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../animations/index';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }      
})
export class WorkItemComponent implements OnInit {

  name = '';
  url: any;
  workDetails: any;
  joe: AngularFireObject<any>;
  constructor(private route: ActivatedRoute, public db: AngularFireDatabase) { 
    this.url = '/work/' + this.route.snapshot.params.id;
    const workDetailsRef = db.object<any>(this.url);
    this.joe = db.object<any>(this.url);
    this.workDetails = workDetailsRef.valueChanges().subscribe(
      workDetails => this.workDetails = workDetails
    );      
    this.workDetails = workDetailsRef
  }

  ngOnInit() {
  }

  saveValue(name, html){
    console.log(name)
    this.joe.update({title: name, body: html})
  }

}
