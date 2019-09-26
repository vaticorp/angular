import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';
import { User } from '../login/login/user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  private _isLoggedIn: boolean;
  private users: User[] = [
    new User('admin', 'qwer'),
    new User('guest', 'asdf')
  ];

  logOff() {
    localStorage.setItem('isLoggedIn', 'false');
    //this._isLoggedIn = false;
    this.router.navigate(['enter']);
  }

  private dataSource = new Subject<String>();
  dataUpdate$ = this.dataSource.asObservable();

  updateDate(data: String) {
    this.dataSource.next(data);
  }

  isCredentials(login: string, password: string) {
    let userExist = this.users.find((s) => s.login === login && s.password === password) != undefined;
    return userExist;
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  setLoggedIn(value: string) {
    //this._isLoggedIn = value;
    localStorage.setItem('isLoggedIn', 'true');
  }
}
