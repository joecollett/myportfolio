import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { CommonComponentsModule } from '../common/common.module';

import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailsComponent } from './work/work-details/work-details.component';
import { WorkItemComponent } from './edit/work-item/work-item.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UploadService } from './uploads/shared/upload.service';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { WorkTileComponent } from './work/work-tile/work-tile.component';

@NgModule({
  declarations: [
    EditComponent,
    HomeComponent,
    WorkComponent,
    WorkDetailsComponent, 
    WorkItemComponent,    
    UploadFormComponent,
    LoginComponent,  
    ContactComponent,
    AboutComponent,
    WorkTileComponent,         
  ],
  providers: [
    UploadService    
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    RouterModule,
    ReactiveFormsModule,
    CommonComponentsModule
  ]
})
export class PortfolioModule { }
 