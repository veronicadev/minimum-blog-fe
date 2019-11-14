import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mb-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
  posts: Array<Post>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .pipe(
        map((result: any) => {
          return result.posts;
        }))
      .subscribe((result: Post[]) => {
        this.posts = result;
        console.log(result);
      });
  }

}
