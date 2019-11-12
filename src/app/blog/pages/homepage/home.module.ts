import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { PostComponent } from '../../post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { NbCardModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
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
    HomeRoutingModule,
    NbCardModule,
    SharedModule
  ],
  exports:[
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    PostComponent
  ]
})
export class HomeModule { }
