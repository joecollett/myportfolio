import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { fadeInAnimation } from '../../shared/animations/index';
import { UploadService } from '../uploads/shared/upload.service';
import { Upload } from '../uploads/shared/upload';
import * as _ from "lodash";
import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

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
  caption:any;  
  workRef:AngularFireList<any>;
  workValue:any;
  workValueDescription:any;
  workItems:Observable<any>;
  selectedFiles: FileList;
  captionImage: FileList;
  currentCaptionImage: Upload;
  currentUpload: Upload;  
  content:any;
  showSpinner: boolean = false;
  ckeditorContent;
  workBody;
  workPrimaryColor;
  workCaption;
  description;
  


  constructor(public db: AngularFireDatabase, private upSvc: UploadService, private router: Router, private toastr: ToastrService, vcr: ViewContainerRef) {
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
  saveValue(name, desc){
    this.homeRef.update({title: name, description:desc})
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  } 
  detectCaptionImage(event) {
    this.captionImage = event.target.files;
  }     
  addWork(work, body, image, caption, color, description){
    var workId = work.replace(/[^a-z0-9]/gi,'').toLowerCase();
    let file = this.selectedFiles.item(0);
    let captionImg = this.captionImage.item(0);
    this.currentUpload = new Upload(file);  
    this.currentCaptionImage = new Upload(captionImg); 
    this.upSvc.pushUpload(this.currentUpload);
    this.upSvc.pushUpload(this.currentCaptionImage);
    this.showSpinner = true;
    setTimeout(()=>{   
      this.workRef.set(workId, {
        title: work,
        desc: description,
        caption: caption,
        body: body,
        id: workId,
        image: this.currentUpload.url,
        captionImg: this.currentCaptionImage.url,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
        backgroundcolor: color
      }).then(resolve => {
        this.showSpinner = false;
        this.toastr.success("You're changes have been saved!", "Success!");
        setTimeout(()=>{
          this.router.navigate(['/work/' + workId]);
        },2000)
      }, reject => {
        this.showSpinner = false;
      })
      .catch(reject => {
        this.showSpinner = false;
      });       
    },3000);
  }
  deleteWork(item){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.workRef.remove(item.id)
    }
  }

  convertUrl(input){
    return input.replace(/[^a-z0-9]/gi,'').toLowerCase();
  }  

  ngOnInit() {
  }

}
