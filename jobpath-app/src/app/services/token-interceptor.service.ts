import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _auth: FirebaseService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth.getToken()}`
      },
    });
    return next.handle(tokenizedRequest);
  }
}
