import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit, OnChanges {

  @Input() curentDateWeather;
  @Input() threeHoursWeather;

  public firstSlot;
  public secondSlot;
  public thirdSlot;
  public fourthSlot;
  public fifthSlot;
  public sixth;


  constructor(public weatherService: WeatherService) {
    // this.populateWeatherSlots();
  }

  ngOnInit() {
    this.populateWeatherSlots();
  }

  private populateWeatherSlots() {
    this.firstSlot = this.threeHoursWeather.list[0];
    this.secondSlot = this.threeHoursWeather.list[1];
    this.thirdSlot = this.threeHoursWeather.list[2];
    this.fourthSlot = this.threeHoursWeather.list[3];
    this.fifthSlot = this.threeHoursWeather.list[4];
    this.sixth = this.threeHoursWeather.list[5];
  }

  ngOnChanges(changes): void {
    this.populateWeatherSlots();
  }


}
// ng build --base-href=/angular/
