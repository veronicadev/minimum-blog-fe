import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getUser(id?: string):Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${environment.apiUrl}/user/${id}`);
  }
}
