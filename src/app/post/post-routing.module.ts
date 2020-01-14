import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostsComponent } from './posts/posts.component';
import { AuthGuard } from '../services/auth.guard';
import { FeedComponent } from './feed/feed.component';
import { PostMainComponent } from './post-main/post-main.component';

const routes: Routes = [
  {
    path: '',
    component: PostMainComponent,
    children:[
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: ':id',
        component: PostComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
