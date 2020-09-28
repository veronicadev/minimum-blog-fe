import { AngularEditorModule } from '@kolkov/angular-editor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ErrorDialogService } from './services/error-dialog.service';
import { ErrorResponseInterceptor } from './services/error-response.interceptor';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { HeaderComponent } from './header/header.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularEditorModule
  ],
  providers: [
    PostService,
    ErrorDialogService,
    AuthService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
