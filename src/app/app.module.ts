import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbDialogModule, NbButtonModule } from '@nebular/theme';
import { SharedModule } from './shared/shared.module';
import { ErrorDialogService } from './services/error-dialog.service';
import { ErrorResponseInterceptor } from './services/error-response.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    SharedModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbCardModule
  ],
  providers: [
    PostService,
    ErrorDialogService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
