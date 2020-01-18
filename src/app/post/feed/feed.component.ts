import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post, PostsResponse } from 'src/app/models/post';

@Component({
  selector: 'mb-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  posts: Post[];
  showPostsSpinner: boolean = true;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getFeed().subscribe((postsResponse:PostsResponse)=>{
      this.posts = postsResponse.posts;
      this.showPostsSpinner = false;
    })
  }
}
