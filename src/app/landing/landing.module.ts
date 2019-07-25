import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherComponent} from './weather/weather.component';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {WeatherWidgetComponent} from './weather/weather-widget/weather-widget.component';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing-routing.module';
import {HomeAppModule} from '../home-app/home-app/home-app.module';
import {BaseModule} from '../base/base.module';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    LandingRoutingModule,
    HomeAppModule,
    BaseModule
  ],
  declarations: [WeatherComponent, WeatherWidgetComponent, LandingComponent, TestComponentComponent],
  exports: [WeatherComponent, LandingComponent],
  providers: [WeatherService]
})
export class LandingModule {
}
