import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'mb-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.less']
})
export class FeedComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getFeed().subscribe((posts)=>{
      console.log(posts)
    })
  }
}
