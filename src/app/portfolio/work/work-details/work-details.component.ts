import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss'],   
  animations: [
    trigger('fade', [ 
      transition('false => true', [
        style({ opacity: 0, visibility: 'visible'}), 
        animate(300, style({opacity: 1}))
      ]),        
    ])
  ]    
})
export class WorkDetailsComponent implements OnInit, AfterViewInit {
  name = '';
  url: any;
  workDetails: any;
  showSpinner: boolean = true;
  animation = false;

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

  ngAfterViewInit() {
    setTimeout(() => {
      this.animation = true;
    }, 1200);
  }  

}
