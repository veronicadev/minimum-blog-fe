import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: 'edit-post',
    component: EditPostComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
