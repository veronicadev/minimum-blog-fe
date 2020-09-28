import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {

  userLoggedinEvent: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiUrl}/login`, { email, password });
  }

  signup(email: string, username: string, password: string){
    return this.httpClient.post<User>(`${environment.apiUrl}/signup`, {
      email:email,
      password:password,
      name:username
     });
  }

  isAuth(){
    if(this.getUser()){
      this.userLoggedinEvent.next(true);
      return true;
    }
    this.userLoggedinEvent.next(false);
    return false;
  }

  setUser(user: User){
    localStorage.setItem('user', JSON.stringify(user));
    this.userLoggedinEvent.next(true);
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  removeUser(){
    localStorage.removeItem('user');
    this.userLoggedinEvent.next(false);
  }

  logout(){
    this.removeUser();
  }
}
