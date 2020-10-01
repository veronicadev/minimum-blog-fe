import { DomSanitizer } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, Sanitizer, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
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
    category:'',
  };
  postId: string;
  showPostContentSpinner:boolean = true;
  showPostTitleSpinner:boolean = true;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer,
    private postService: PostService) { }

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
        this.post.content = decodeURI(this.post.content)
        this.showPostContentSpinner = false;
        this.showPostTitleSpinner = false;
      });
  }

}
