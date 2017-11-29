import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { fadeInAnimation } from '../animations/index';
import { ConvertUrlService } from '../service/convert-url.service';
import { UploadService } from '../uploads/shared/upload.service';
import { Upload } from '../uploads/shared/upload';
import * as _ from "lodash";
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }  ,
  providers: [UploadService]  
})
export class EditComponent implements OnInit {
  home:any;
  homeRef:any;
  username: any;
  work:any;
  workRef:AngularFireList<any>;
  workValue:any;
  workItems:Observable<any>;
  selectedFiles: FileList;
  currentUpload: Upload;  
  content:any;


  constructor(public db: AngularFireDatabase, private upSvc: UploadService) {
    const homeRef = db.object<any>('home');
    const workRef = db.list<any>('work');
    this.content = '<p>Hello <strong>World !</strong></p>'
    this.home = homeRef.valueChanges().subscribe(
      test => this.home = test
    );
    this.work = workRef.valueChanges().subscribe(
      test2 => this.work = test2
    );
    this.homeRef = homeRef;
    this.workRef = workRef;
    this.workItems = workRef.valueChanges();
  } 
  saveValue(name){
    this.homeRef.update({title: name})
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }  
  addWork(work, body, image){
    var workId = work.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);  
    this.upSvc.pushUpload(this.currentUpload);
    setTimeout(()=>{    //<<<---    using ()=> syntax
      console.log(this.currentUpload.url);
      this.workRef.set(workId, {
        title: work,
        body: body,
        id: workId,
        image: this.currentUpload.url
      });       
    },3000);
  }

  convertUrl(input){
    return input.replace(/[^a-z0-9]/gi,'').toLowerCase();
  }  

  ngOnInit() {
  }

}
