import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
  apiUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';
  apiURLGetSummary = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary';
  
  // Inject HttpClinet
  constructor(private _httpClient: HttpClient) { }

  // getYahooFinance() : Observable<any>{
  
  //   let httpHeaders = new HttpHeaders({
  //     'X-RapidAPI-Key': 'a083ce1277mshc48cca53f590089p1b4227jsn6116aab2a3e5',
  //     'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  //   })

   
  //  return this._httpClient.get(this.apiUrl, {headers: httpHeaders, params: {
  //   q: 'tesla', region: 'US'
  //  }});

  // }
  getYahooFinance () : Observable<any>{
  
    return this._httpClient.get(this.apiUrl, { params: {
     q: 'tesla', region: 'US'
    }});
 
   }
   getstocksummary() : Observable<any> {

    return this._httpClient.get(this.apiURLGetSummary,  { params: {
     symbol: 'AMRN', region: 'US'
    }});
   }
}