import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';

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
    BlogRoutingModule
  ],
  exports:[
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent
  ]
})
export class BlogModule { }
