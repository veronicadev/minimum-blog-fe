import { Injectable } from '@angular/core';
import { Post, PostsResponse } from '../models/post';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {

  constructor(public httpClient: HttpClient) { }

  getPosts(page: number):Observable<PostsResponse>{
    let params = new HttpParams();
    params.set('page', page.toString());
    return this.httpClient.get<PostsResponse>(`${environment.apiUrl}/posts`, {
      params:{
        page: page.toString()
      }
    });
  }

  getPost(id:string):Observable<Post>{
    return this.httpClient.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  getFeed(page: number):Observable<PostsResponse>{
    let params = new HttpParams();
    params.set('page', page.toString());
    return this.httpClient.get<PostsResponse>(`${environment.apiUrl}/posts/feed`,
    {
      params:{
        page: page.toString()
      }
    });
  }

  postPost(post: any):Observable<Post>{
    return this.httpClient.post<Post>(`${environment.apiUrl}/posts`, post);
  }

  putPost(postId: string, post: Post):Observable<Post>{
    return this.httpClient.post<Post>(`${environment.apiUrl}/posts/${postId}`, post);
  }

}
