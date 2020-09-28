import { PaginationSettings, IPaginationSettings } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post, PostsResponse } from 'src/app/models/post';

@Component({
  selector: 'mb-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];
  showPostsSpinner: boolean = true;
  paginationSettings:IPaginationSettings = new PaginationSettings();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getFeed();
  }

  private getFeed(){
    this.showPostsSpinner = true;
    this.postService.getFeed(this.paginationSettings.currentPage).subscribe((postsResponse:PostsResponse)=>{
      this.posts = postsResponse.posts;
      this.paginationSettings.totalPages = postsResponse.totalPages;
      this.showPostsSpinner = false;
    })
  }

  onChangePage(page:number) {
    this.paginationSettings.currentPage = page;
    window.scrollTo(0, 0);
    this.getFeed();
  }
}
