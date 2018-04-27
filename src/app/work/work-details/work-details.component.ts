import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { fadeInAnimation } from '../../animations/index';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss'],   
})
export class WorkDetailsComponent implements OnInit {
  name = '';
  url: any;
  workDetails: any;
  showSpinner: boolean = true;

  constructor(private route: ActivatedRoute, public db: AngularFireDatabase) { 
    this.url = '/work/' + this.route.snapshot.params.id;
    const workDetailsRef = db.object<any>(this.url, );
    this.workDetails = workDetailsRef.valueChanges().subscribe(
      workDetails => this.workDetails = workDetails
    );      
    this.workDetails = workDetailsRef
  }

  ngOnInit() {
   
  }

}
