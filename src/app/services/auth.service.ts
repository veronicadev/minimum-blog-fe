import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUrl}/login`, { email, password });
  }

  isAuth(){
    const user = JSON.parse(localStorage.getItem('user'));
    return (user) ? true : false;
  }
}
