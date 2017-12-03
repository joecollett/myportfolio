import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../animations/index';
import { FormsModule } from '@angular/forms';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';
import * as _ from "lodash";
import * as firebase from 'firebase';

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
  item: AngularFireObject<any>;
  selectedFiles: FileList;
  currentUpload: Upload;  
  content:any;  
  imageurl:any;
  image:any;
  fileUpload:any;
  constructor(public upSvc: UploadService, private route: ActivatedRoute, public db: AngularFireDatabase) { 
    this.url = '/work/' + this.route.snapshot.params.id;
    const workDetailsRef = db.object<any>(this.url);
    this.item = db.object<any>(this.url);
    this.workDetails = workDetailsRef.valueChanges().subscribe(
      workDetails => this.workDetails = workDetails
    );      
    this.workDetails = workDetailsRef
  }

  ngOnInit() {
  }

  detectFiles(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.imageurl = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }    
    this.selectedFiles = event.target.files;
  }  

  saveValue(name, html, image, caption){
    if(!this.imageurl){
      this.image = {
        url: ""
      };
      this.image.url = this.workDetails.image;
    } else {
      let file = this.selectedFiles.item(0)
      this.currentUpload = new Upload(file);  
      this.image = this.currentUpload 
      this.upSvc.pushUpload(this.image);   
    }
    setTimeout(()=>{   
      this.item.update({
        title: name, 
        body: html, 
        caption: caption,
        image: this.image.url
    })
    },3000);
  }

  removeImage(){
    this.fileUpload = null;
    this.imageurl = null;
  }

}
