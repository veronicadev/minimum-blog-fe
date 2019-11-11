import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/post';
import { pipe } from 'rxjs';
import { map  } from 'rxjs/operators';

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
    .pipe(
      map((result:any ) =>{
        return result.posts
      }))
    .subscribe((result:Post[]) =>{
      this.posts = result
      console.log(result)
    })
  }

}
