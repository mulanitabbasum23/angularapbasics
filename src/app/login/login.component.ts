import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, private _authService: AuthService ) { }

  ngOnInit() {
  }

  // login(email: any, pwd: any)
  // {
  //   if (email=='codemind@gmail.com' && pwd=='123') {
  //     this._router.navigate(['/home']);
  //   } 
  //   else {
  //     this._router.navigate(['/login']);
  //   }
  // }

  login(userName: any, password: any) {

    var result = this._authService.checkUserNameandPassword(userName, password);

    if (result == true) {

     window.alert('Login successfully');
     this._router.navigate(['/product']);
    // this._router.navigate(['/order']);
     
    } else {
     window.alert('Invalid username and password');
     this._router.navigate(['/login']);
    }

 }

}
