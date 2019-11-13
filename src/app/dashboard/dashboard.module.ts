import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NbTreeGridModule, NbInputModule, NbCardModule } from '@nebular/theme';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditPostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
    DashboardRoutingModule,
    NbInputModule,
    NbCardModule,
    ReactiveFormsModule

  ]
})
export class DashboardModule { }
