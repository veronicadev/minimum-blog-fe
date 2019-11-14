import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'mb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  post: Post = {
    title: '',
    content:'',
    imageUrl:''
  };
  postId: string;
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params.id;
      this.getPost();
    });
  }

  getPost() {
    this.postService.getPost(this.postId)
      .subscribe((post: Post) => {
        console.log(post);
        this.post = post;
      });
  }

}
