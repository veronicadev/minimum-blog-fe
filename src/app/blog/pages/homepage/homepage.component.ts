import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';

@Component({
  selector: 'mb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  posts:Array<Post>;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe((result:any) =>{
      this.posts = result.posts
    })
  }

}
