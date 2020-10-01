import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../../../models/post';

@Component({
  selector: 'mb-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.less']
})
export class PostPreviewComponent implements OnInit {

  @Input('index') index: number;
  @Input('post') post: Post;
  constructor() {
  }

  ngOnInit() {
    if(this.post && this.post.excerpt){
      this.post.excerpt = decodeURI(this.post.excerpt);
    }
  }

}
