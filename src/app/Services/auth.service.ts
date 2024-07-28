import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  authUser(user: User) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users'));
      debugger;
    }
    return UserArray.find(
      (loginuser) =>
        loginuser.userName === user.userName &&
        loginuser.Password === user.Password
    );
  }
}
