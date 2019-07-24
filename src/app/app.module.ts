import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { LandingComponent } from './landing/landing.component';
import {LandingModule} from './landing/landing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
