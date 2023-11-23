import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkUserNameandPassword(userName: string, password: string) {

    if (userName == 'admin' && password == 'admin') {
       localStorage.setItem('username', 'admin123');
       return true;
    } else {
      return false;
    }
  }
}
