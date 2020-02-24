import { EventManager } from '@angular/platform-browser';
import { Observable,  } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable,  } from '@angular/core';
import { HostListener,} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  } 
  innerWidth;

  private _resizeWidth = new BehaviorSubject(Object);
  public resizeWidth = this._resizeWidth.asObservable();  


  inMobileView(size){
    return size < 768 ? true : false;
  }

  setResize(resizeWidth: any): void {
    resizeWidth = resizeWidth < 768 ? true : false;;
    this._resizeWidth.next(resizeWidth);
  }

}
