import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppRoutingModule} from '../../app-routing/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'Святослав';

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params)=> console.log(params['id']))
  }

  ngOnInit() {
  }
}
