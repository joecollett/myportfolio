import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConvertUrlService } from './service/convert-url.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { CommonComponentsModule } from './common/common.module';
import { RouterModule } from '@angular/router';

import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module';

import { Ng2PageScrollModule}  from 'ng2-page-scroll';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    OrderModule,
    Ng2PageScrollModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonComponentsModule,
    RouterModule
  ],
  providers: [
    ConvertUrlService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { 

}

