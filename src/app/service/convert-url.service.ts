import { Injectable } from '@angular/core';

@Injectable()
export class ConvertUrlService {

  constructor() { }
  
  convertUrl(input){
    return input.replace(/[^a-z0-9]/gi,'').toLowerCase();
  }
}
