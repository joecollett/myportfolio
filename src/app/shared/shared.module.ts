import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeHtmlPipe } from './pipes/safe-html-pipe.pipe';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ReversePipe } from './pipes/reverse.pipe';



@NgModule({
  declarations: [   
    SafeHtmlPipe,
    LoadingSpinnerComponent,
    ReversePipe       
  ],
  providers: [ 
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SafeHtmlPipe,
    LoadingSpinnerComponent,
    ReversePipe      
  ]
})
export class SharedModule { }
