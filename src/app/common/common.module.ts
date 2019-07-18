import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './navbar/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NavFullComponent } from './nav-full/nav-full.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavFullComponent,
    NavComponent,
    FooterComponent       
  ],
  imports: [
    CommonModule 
  ], 
  exports: [
    NavbarComponent,
    NavFullComponent,
    NavComponent,
    FooterComponent       
  ]
})
export class CommonComponentsModule { }
