import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { fadeInAnimation } from '../../animations/index';
import { FormsModule } from '@angular/forms';
import { UploadService } from '../../uploads/shared/upload.service';
import { Upload } from '../../uploads/shared/upload';
import * as _ from "lodash";
import * as firebase from 'firebase';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router'

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
  selectedCaptionImg: FileList;
  currentUpload: Upload;  
  captionUpload: Upload;  
  content:any;  
  imageurl:any;
  captionurl:any;
  image:any;
  captionimage:any;
  fileUpload:any;
  showSpinner: boolean = false;

  constructor(private router: Router, public upSvc: UploadService, private route: ActivatedRoute, public db: AngularFireDatabase, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.url = '/work/' + this.route.snapshot.params.id;
    const workDetailsRef = db.object<any>(this.url);
    this.item = db.object<any>(this.url);
    this.workDetails = workDetailsRef.valueChanges().subscribe(
      workDetails => this.workDetails = workDetails
    );      
    this.workDetails = workDetailsRef
    this.toastr.setRootViewContainerRef(vcr);
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

  detectCaptionImg(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.captionurl = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }    
    this.selectedCaptionImg = event.target.files;
  }    

  saveValue(name, html, image, captionimage, caption){
    this.showSpinner = true;
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

    if(!this.captionurl){
      this.captionimage = {
        url: ""
      }
      this.captionimage.url = this.workDetails.captionImg;
    } else {
      let capfile = this.selectedCaptionImg.item(0)
      this.captionUpload = new Upload(capfile);  
      this.captionimage = this.captionUpload 
      this.upSvc.pushUpload(this.captionimage);        
    }
    setTimeout(()=>{   
      this.item.update({
        title: name, 
        body: html, 
        caption: caption,
        image: this.image.url,
        captionImg: this.captionimage.url
    })
    .then(resolve => {
      this.showSpinner = false;
      this.toastr.success("Your changes have been saved!", "Success!");
      setTimeout(()=>{
        this.router.navigate(['/work/' + this.route.snapshot.params.id]);
      },2000)
    })
    .catch(err => console.log(err, 'You dont have access!'));
    },3000);
  }

  removeImage(){
    this.fileUpload = null;
    this.imageurl = null;
  }

  ngOnInit() {
    
  }

}
