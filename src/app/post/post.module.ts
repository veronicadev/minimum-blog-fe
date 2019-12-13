import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';
import { FeedComponent } from './feed/feed.component';
import { PostMainComponent } from './post-main/post-main.component';
@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    FeedComponent,
    PostMainComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule
  ],
  exports:[
    PostComponent,
    PostsComponent
  ]
})
export class PostModule { }
