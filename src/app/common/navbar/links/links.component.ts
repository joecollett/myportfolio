import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../../service/auth.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  @Input() background: string;
  closeNav;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
