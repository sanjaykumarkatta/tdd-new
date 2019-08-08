import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {  AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { UserComponent } from './user/user.component';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpMockRequestInterceptor } from './interceptor.mock';
import { HttpRequestInterceptor } from './interceptor';
import { UserService } from './user.service';
export const isMock = environment.mock;
@NgModule({
  declarations: [
    AppComponent,
    ListOfUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,  AppRoutes
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: isMock ? HttpMockRequestInterceptor : HttpRequestInterceptor,
    multi: true
    },UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
