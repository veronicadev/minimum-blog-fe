import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
