import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { NbCardModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    HomepageComponent,
    FooterComponent
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
    FooterComponent
  ]
})
export class HomeModule { }
