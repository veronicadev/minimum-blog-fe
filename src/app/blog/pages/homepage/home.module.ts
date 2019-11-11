import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { PostComponent } from '../../post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  exports:[
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent
  ]
})
export class HomeModule { }
