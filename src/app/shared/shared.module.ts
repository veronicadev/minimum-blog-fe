import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimPipe } from './pipes/trim.pipe';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostPreviewMetaComponent } from './components/post-preview-meta/post-preview-meta.component';
import { PostAuthorComponent } from './components/post-author/post-author.component';
import { PostLikeComponent } from './components/post-like/post-like.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PostsNavComponent } from './components/posts-nav/posts-nav.component';

@NgModule({
  declarations: [
    TrimPipe,
    PostPreviewComponent,
    PostPreviewMetaComponent,
    PostAuthorComponent,
    PostLikeComponent,
    SpinnerComponent,
    PostsNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TrimPipe,
    PostPreviewComponent,
    PostPreviewMetaComponent,
    PostAuthorComponent,
    PostLikeComponent,
    SpinnerComponent,
    PostsNavComponent
  ]
})
export class SharedModule { }
