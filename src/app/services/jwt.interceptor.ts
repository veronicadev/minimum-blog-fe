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
    let currentUser = this.authService.getUser();
    let request: HttpRequest<any> = req.clone();
    if (currentUser && currentUser.token) {
        request = req.clone({
            setHeaders: {
              Authorization: `Bearer ${currentUser.token}`
            }
        });
    }
    return next.handle(request);
  }
}
