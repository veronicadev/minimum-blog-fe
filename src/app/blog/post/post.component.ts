import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'mb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input('index') index: number;
  @Input('post') post: Post;
  constructor() { }

  ngOnInit() {
  }

}
