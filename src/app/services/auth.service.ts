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
  chatgptemailandpwd(email:any, password:any){
    if (email=='^[a-z0-9A-Z]+@gmail.com' && password =='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$') {
      return true;
    }
    else{
      return false;
    }
  }
}
