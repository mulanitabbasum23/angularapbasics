import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _route: Router) {
    
  }
  canActivate() : boolean {

    if (localStorage.getItem('username') != null) {
      return true;
    } else {
      this._route.navigate(['./login']);
      return false;
    }
    
  }
  
}