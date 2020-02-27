import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavFullComponent } from './nav-full/nav-full.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinksComponent } from './navbar/links/links.component';
import { SocialMediaComponent } from './footer/social-media/social-media.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavFullComponent,
    FooterComponent,
    LinksComponent,
    SocialMediaComponent       
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ], 
  exports: [
    NavbarComponent,
    NavFullComponent, 
    FooterComponent       
  ]
})
export class CommonComponentsModule { }
