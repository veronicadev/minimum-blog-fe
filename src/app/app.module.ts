import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbDialogModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { SharedModule } from './shared/shared.module';
import { ErrorDialogService } from './services/error-dialog.service';
import { ErrorResponseInterceptor } from './services/error-response.interceptor';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    SharedModule,
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbCardModule
  ],
  providers: [
    PostService,
    ErrorDialogService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
