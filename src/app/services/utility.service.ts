import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

 // userName = new Subject();

 userName = new BehaviorSubject('Angular Dev');
 spacevalue = new Subject<string>();


  constructor(private _httpClient:HttpClient) { }

  subjectData(data:any){
    this.spacevalue.next(data);
   }

  getDatafromWiki(space:any): Observable<any>{
    return this._httpClient.get('https://en.wikipedia.org/w/api.php',{
      params:{action: 'query',
    format: 'json',
    list: 'search',
    utf8: '1',
    srsearch: space,
    origin: '*'
    }})
  }

  getDatafromRandomUser():Observable<any>{
    return this._httpClient.get('https://randomuser.me/api/?results=50')
  }

}
