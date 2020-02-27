import { Component, OnInit } from '@angular/core';
import { UploadService } from '../shared/upload.service';
import { Upload } from '../shared/upload';
import * as _ from "lodash";

@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
  providers: [UploadService]
})

export class UploadFormComponent {
  selectedFiles: FileList;
  currentUpload: Upload;
  returnUrl:any;
  constructor(private upSvc: UploadService) { }
  detectFiles(event) {
      this.selectedFiles = event.target.files;
  }
  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
    setTimeout(()=> {
      this.returnUrl = "<div>" + this.currentUpload.url + "</div>";
    },7000)
  }
}