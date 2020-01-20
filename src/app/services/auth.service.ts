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
    return (this.getUser()) ? true : false;
  }

  setUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }
}
