import { Injectable } from '@angular/core';
import {  HttpInterceptor, HttpRequest, HttpHeaders, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>,next:HttpHandler):
  Observable<HttpEvent<any>>{
    const headers = new HttpHeaders({
      'Accept':'application/json'
    });
    const clone  = req.clone ({
      headers : headers
    });
    return next.handle(clone)
    
    
  };
}
