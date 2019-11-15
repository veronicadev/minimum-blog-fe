import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from './error-dialog.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorResponseInterceptor implements HttpInterceptor {

  constructor(private errorDialogService:ErrorDialogService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(new Date());
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
         /* if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
          }*/
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.errorDialogService.open(error);
        return throwError(error);
    }));
  }
}
