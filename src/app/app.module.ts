import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LandingModule} from './landing/landing.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './auth/user.service';
import {AuthenticationService} from './auth/authentification.service';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
