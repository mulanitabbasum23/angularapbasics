import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihubfoodService {
  apiUrl =   'https://food-recipes-with-images.p.rapidapi.com/'

  constructor(private _httpClient:HttpClient) { }
  getData():Observable<any>{
    let httpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': 'a083ce1277mshc48cca53f590089p1b4227jsn6116aab2a3e5',
      'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
    })
    return  this._httpClient.get(this.apiUrl,{headers:httpHeaders,params:{
      q: 'chicken soup'
    }})
  }
}
