import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl ='http://localhost:3000/todos';
  headers = new HttpHeaders().set(`Content-Type`,`application/json`)

  constructor(private _httpClient: HttpClient) { }

  create(data:any): Observable<any>{
    return this._httpClient.post(this.apiUrl,data)
  }
  getTodos() {
    return this._httpClient.get(this.apiUrl)
  }
  update(id:any, data:any):Observable<any>{
    let ApiUrl = `${this.apiUrl}/${id}`
    return this._httpClient.put(ApiUrl,data,{headers:this.headers});
  }
  delete(id:any):Observable<any>{
    let ApiUrl = `${this.apiUrl}/${id}`;
    return this._httpClient.delete(ApiUrl);
  }
}
