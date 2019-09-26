import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'Святослав';

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) {
    activatedRoute.params.subscribe((params)=> console.log(params['id']))
  }

  logOff() {
    this.authService.logOff()
  }

  listRedirect() {
    this.router.navigate(['../'])
  }

  ngOnInit() {
  }
}
