import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailsComponent } from './work/work-details/work-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConvertUrlService } from './service/convert-url.service';
import { WorkItemComponent } from './edit/work-item/work-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { UploadService } from './uploads/shared/upload.service';
import { SafeHtmlPipe } from './pipes/safe-html-pipe.pipe';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { NavFullComponent } from './nav-full/nav-full.component';
import { NavComponent } from './navbar/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent,
    WorkComponent,
    WorkDetailsComponent,
    WorkItemComponent,
    NavbarComponent,
    UploadFormComponent,
    LoginComponent,
    SafeHtmlPipe,
    LoadingSpinnerComponent,
    ReversePipe,
    NavFullComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CKEditorModule,
    ToastrModule.forRoot(), 
    OrderModule,
    Ng2PageScrollModule,
    ReactiveFormsModule
  ],
  providers: [
    ConvertUrlService,
    AuthService,
    AuthGuard,
    UploadService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { 

}

