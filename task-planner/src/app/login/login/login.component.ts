import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  checkButton() {
    if (!this.authService.isCredentials(this.login, this.password)) {
      alert('Введены ошибочные данные пользователя!');
      return;
    }
      this.authService.setLoggedIn(true);
      this.router.navigate(['tasks']);
    }

}
