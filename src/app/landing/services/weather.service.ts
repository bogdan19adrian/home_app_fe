import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherService {

  // http://api.openweathermap.org/data/2.5/forecast?q=bucharest&appid=f9c986f05f3b303b0afee53a585f9422
  // http://api.openweathermap.org/data/2.5/weather?q=bucharest&units=metric&appid=f9c986f05f3b303b0afee53a585f9422
  constructor(private http: HttpClient) {
  }

  public getWeather(city: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='
      + city + '&units=metric&appid=f9c986f05f3b303b0afee53a585f9422');
  }
  public getCurrentWeather(city: string) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='
      + city + '&units=metric&appid=f9c986f05f3b303b0afee53a585f9422');
  }
}
