import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherComponent} from './weather/weather.component';
import {WeatherService} from './services/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {WeatherWidgetComponent} from './weather/weather-widget/weather-widget.component';
import {LandingComponent} from './landing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  declarations: [WeatherComponent, WeatherWidgetComponent, LandingComponent],
  exports: [WeatherComponent, LandingComponent],
  providers: [WeatherService]
})
export class LandingModule {
}
