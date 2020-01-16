import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { forkJoin } from 'rxjs';
import { PostsResponse } from '../models/post';
import { User } from '../models/user';

@Component({
  selector: 'mb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  user: any = {};
  userId: string;
  postsResult: PostsResponse =  {
    totalItems: 0,
    totalPages: 0,
    posts:[]
  };
  showUserSpinner: boolean = true;
  showPostsSpinner: boolean = true;
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params.userId;
      this.getContent();
    });
  }

  getContent() {
    forkJoin(
      this.userService.getPosts(this.userId),
      this.userService.getUser(this.userId)
    ).subscribe(([postsResponse, userResponse]) => {
        this.postsResult = <PostsResponse> postsResponse;
        this.user = <User>userResponse;
        this.showPostsSpinner = false;
        this.showUserSpinner = false;
      });
  }

}
