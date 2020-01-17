import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(new Date());
    let currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser)
    let request: HttpRequest<any>;
    if (currentUser && currentUser.token) {
        request = req.clone({
            setHeaders: {
              Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    console.log(request)
    return next.handle(request);
  }
}
