import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NbTreeGridModule, NbInputModule, NbCardModule, NbButtonModule } from '@nebular/theme';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
    DashboardRoutingModule,
    NbInputModule,
    NbCardModule,
    ReactiveFormsModule,
    NbButtonModule

  ]
})
export class DashboardModule { }
