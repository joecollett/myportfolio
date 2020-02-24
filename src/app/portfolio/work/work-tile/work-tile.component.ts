import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-tile',
  templateUrl: './work-tile.component.html',
  styleUrls: ['./work-tile.component.scss']
})
export class WorkTileComponent implements OnInit {
  @Input() work: Object;
  constructor() { }

  ngOnInit() {
  }

  convertUrl(input){
    return input.replace(/[^a-z0-9]/gi,'').toLowerCase();
  }  

}
