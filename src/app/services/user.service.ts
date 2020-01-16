import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Post, PostsResponse } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) { }

  getUser(id?: string):Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/user/${id}`);
  }

  getPosts(id?: string):Observable<PostsResponse>{
    return this.httpClient.get<PostsResponse>(`${environment.apiUrl}/user/${id}/posts`);
  }
}
