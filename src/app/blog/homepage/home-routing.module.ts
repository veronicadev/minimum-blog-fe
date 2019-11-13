import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path:'homepage',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }
