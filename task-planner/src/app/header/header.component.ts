import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html?v=${new Date().getTime()}',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'Святослав';

  constructor() { }

  ngOnInit() {
  }

}
