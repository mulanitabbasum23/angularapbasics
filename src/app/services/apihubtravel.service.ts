import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihubService {
  apiurl= 'https://airbnb-search.p.rapidapi.com/languages'

  constructor(private _httpClient:HttpClient) { }
  getData():Observable<any>{
    let httpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': 'a083ce1277mshc48cca53f590089p1b4227jsn6116aab2a3e5',
      'X-RapidAPI-Host': 'airbnb-search.p.rapidapi.com'
    })
    return this._httpClient.get(this.apiurl,{headers:httpHeaders})
  }
}
