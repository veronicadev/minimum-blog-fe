import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {

  constructor(public httpClient: HttpClient) { }

  getPosts(page?: string):Observable<Array<Post>>{
    let params = new HttpParams();
    params.set('page', page);
    return this.httpClient.get<Array<Post>>(`${environment.apiUrl}/posts`, {params});
  }

  getPost(id:string):Observable<Post>{
    return this.httpClient.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  getFeed(page?: string):Observable<Array<Post>>{
    let params = new HttpParams();
    params.set('page', page);
    return this.httpClient.get<Array<Post>>(`${environment.apiUrl}/posts/feed`, {params});
  }

}
