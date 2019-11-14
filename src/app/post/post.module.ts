import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { FooterComponent } from '../blog/footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    FooterComponent
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
