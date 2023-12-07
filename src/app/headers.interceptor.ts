import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadrsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log('through interceptor', request);

    const req = request.clone({
      headers: request.headers.set('X-RapidAPI-Key', 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177')
                               .set('X-RapidAPI-Host', 'apidojo-yahoo-finance-v1.p.rapidapi.com'),
                               
    });

    console.log('modified request', req);

    return next.handle(req);
  }
}