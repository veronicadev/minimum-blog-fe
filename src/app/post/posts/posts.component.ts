import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPaginationSettings, PaginationSettings, Post, PostsResponse } from '../../models/post';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mb-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: Array<Post> = [];
  socket;
  showPostsSpinner: boolean = true;

  paginationSettings:IPaginationSettings = new PaginationSettings();
  constructor(private postService: PostService) {
    this.socket = io.connect(environment.socketUrl);
  }

  ngOnInit() {
    this.getPosts();
    this.socket.on('posts', data => {
      if (data.action === 'create') {
        this.posts.unshift(data.post)
      } else if (data.action === 'update') {
        const post = data.post;
        const postIndex = this.posts.findIndex(p => {
          return p._id.toString() === post._id.toString();
        });
        this.posts[postIndex] = post;
      } else if (data.action === 'delete') {
        const post = data.post;
        const newPosts = this.posts.map(p =>{
          if(p._id.toString() !== post._id.toString()){
            return p;
          }
        });
        this.posts =  newPosts;
      }
    })
  }
  private getPosts(){
    this.showPostsSpinner = true;
    this.postService.getPosts(this.paginationSettings.currentPage)
      .pipe(
        map((result: PostsResponse) => {
          this.paginationSettings.totalPages = result.totalPages;
          return result.posts;
        }))
      .subscribe((result: Post[]) => {
        this.posts = result;
        this.showPostsSpinner = false;
        console.log(result);
      });
  }

  onChangePage(page:number) {
    this.paginationSettings.currentPage = page;
    window.scrollTo(0, 0);
    this.getPosts();
  }

}
