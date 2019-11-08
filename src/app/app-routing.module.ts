import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './blog/pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'homepage', loadChildren: './blog/blog.module#BlogModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
