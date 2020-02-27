import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailsComponent } from './work/work-details/work-details.component';
import { WorkItemComponent } from './edit/work-item/work-item.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { AuthGuard } from '../service/auth-guard.service';



export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'upload', component: UploadFormComponent, canActivate: [AuthGuard]},    
  { path: 'edit', component: EditComponent, canActivate: [AuthGuard]},
  { path: 'portfolio', component: WorkComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'work/:id', component: WorkDetailsComponent},
  { path: 'edit/:id', component: WorkItemComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ]
})
export class PortfolioRoutingModule { }
