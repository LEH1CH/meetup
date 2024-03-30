import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { MeetupComponent } from './meetup/meetup.component';
import { MeetupCardComponent } from './meetup/meetup-card/meetup-card.component';
import { MeetupListComponent } from './meetup/meetup-list/meetup-list.component';
import { LoginComponent } from './meetup/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthInterceptor } from './interceptor/auth-interceptor';
import { ErrorInterceptor } from './interceptor/error-interceptor';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { MeetupFormComponent } from './meetup/meetup-form/meetup-form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchMeetupsComponent } from './meetup/search-meetups/search-meetups.component';
import { MyMeetupComponent } from './meetup/my-meetup/my-meetup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeetupComponent,
    MeetupCardComponent,
    MeetupListComponent,
    AdminPanelComponent,
    HeaderComponent,
    UserListComponent,
    MeetupFormComponent,
    SpinnerComponent,
    SearchMeetupsComponent,
    MyMeetupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
