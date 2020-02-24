import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../common/common.module';

import { SafeHtmlPipe } from './pipes/safe-html-pipe.pipe';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [   
    SafeHtmlPipe,
    LoadingSpinnerComponent,
    ReversePipe,
    HeaderComponent     
  ],
  providers: [ 
  ],
  imports: [
    CommonModule,
    CommonComponentsModule
  ], 
  exports: [
    SafeHtmlPipe,
    LoadingSpinnerComponent,
    ReversePipe,
    HeaderComponent      
  ]
})
export class SharedModule { }
