import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { forkJoin } from 'rxjs';
import { IPaginationSettings, PaginationSettings, Post, PostsResponse } from '../models/post';
import { User } from '../models/user';

@Component({
  selector: 'mb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  user: any = {};
  userId: string;
  showUserSpinner: boolean = true;
  showPostsSpinner: boolean = true;
  posts: Array<Post> = [];
  paginationSettings:IPaginationSettings = new PaginationSettings();
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params.userId;
      this.getContent();
    });
  }

  getContent() {
    forkJoin(
      this.userService.getPosts(this.paginationSettings.currentPage, this.userId),
      this.userService.getUser(this.userId)
    ).subscribe(([postsResponse, userResponse]) => {
        this.user = <User>userResponse;
        this.paginationSettings.totalPages = postsResponse.totalPages;
        this.posts = postsResponse.posts;
        this.showPostsSpinner = false;
        this.showUserSpinner = false;
      });
  }

  onChangePage(page:number) {
    this.paginationSettings.currentPage = page;
    window.scrollTo(0, 0);
    this.getPosts();
  }

  getPosts(){
    this.showPostsSpinner = true;
    this.userService.getPosts(this.paginationSettings.currentPage, this.userId)
      .subscribe(postsResponse=>{
        this.paginationSettings.totalPages = postsResponse.totalPages;
        this.posts = postsResponse.posts;
        this.showPostsSpinner = false;
      });
  }
}
