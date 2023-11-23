import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private _httpClient: HttpClient) { }
  Print() {
    // 
    alert('Document has  printed')
  }

  Demo(){
    alert('demo method called');
  }
  getuserData(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users')
  }
   getPosts() {
  return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
 }
}
