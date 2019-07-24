import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public city: string;
  public enteredSearch: string;
  private weatherDS: any[];
  public isDataAvailable = false;
  public threeHoursWeather;

  public currentWeather;

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    if (localStorage.getItem('city') != null) {
      this.enteredSearch = localStorage.getItem('city');
    }
    this.searchCityForWeather();
  }

  public searchCityForWeather() {
    forkJoin(
      this.weatherService.getCurrentWeather(this.enteredSearch),
      this.weatherService.getWeather(this.enteredSearch))
      .subscribe(
        ([response1, response2]) => {
          if (response2['cod'] === '200') {
            this.city = this.enteredSearch;
            localStorage.setItem('city', this.enteredSearch);
            this.threeHoursWeather = response2;
          }
          if (response1['cod'] === 200 ) {
            this.currentWeather = response1;
          }
          this.isDataAvailable = true;
        });
  }
}
