import { Component } from '@angular/core';

import { ApiService } from '../api.service';

import { WeatherFields } from '../weather-fields';

@Component({
  selector: 'city-group',
  templateUrl: './city-group.component.html',
  styleUrls: ['./city-group.component.less']
})

export class CityGroupComponent {
  public airPressureDescription: string = '';
  public buttonDescription: string = 'View Weather!';
  public chicagoDescription: string = 'Chicago';
  public chicagoWeather: WeatherFields = {};
  public dallasDescription: string = 'Dallas';
  public dallasWeather: WeatherFields = {};

  public humidityDescription: string = '';
  public latitudeDescription: string = '';
  public longitudeDescription: string = '';
  public milwaukeeDescription: string = 'Milwaukee';
  public milwaukeeWeather: WeatherFields = {};
  public minneapolisDescription: string = 'Minneapolis';
  public minneapolisWeather: WeatherFields = {};
  public temperatureDescription: string = '';
  public windDirectionDescription: string = '';
  public windSpeedDescription: string = '';

  constructor(private apiService: ApiService) { }

  public showWeather() {
    this.airPressureDescription = 'Air Pressure';
    this.humidityDescription = 'Humidity';
    this.latitudeDescription = 'Latitude';
    this.longitudeDescription = 'Longitude';
    this.temperatureDescription = 'Temperature';
    this.windDirectionDescription = 'Wind Direction';
    this.windSpeedDescription = 'Wind Speed';

    this.showCity('Chicago');
    this.showCity('Dallas');
    this.showCity('Milwaukee');
    this.showCity('Minneapolis');
  };

  private populateWeatherFields(data: Object, weather: WeatherFields): WeatherFields {
    weather.airPressure = (data['main'].pressure * 0.0145037738).toFixed(2).toString() + ' psi';
    weather.humidity = (data['main'].humidity).toString() + " %";
    weather.latitude = data['coord'].lat;
    weather.longitude = data['coord'].lon;
    weather.temperature = ((data['main'].temp - 273.15) * 9 / 5 + 32).toFixed(2).toString() + ' degrees F';
    weather.windDirection = (data['wind'].deg).toString() + ' meteorological degrees';
    weather.windSpeed = (data['wind'].speed * 2.237).toFixed(2).toString() + ' mph';

    return weather;
  };

  private showCity(city: string) {
    if (city == 'Chicago' || city == 'chicago') {
      this.apiService.getCity('Chicago')
        .subscribe((data) => this.chicagoWeather = this.populateWeatherFields(data, this.chicagoWeather));
    }
    else if (city == 'Dallas' || city == 'dallas') {
      this.apiService.getCity('Dallas')
        .subscribe((data) => this.dallasWeather = this.populateWeatherFields(data, this.dallasWeather));
    }
    else if (city == 'Milwaukee' || city == 'milwaukee') {
      this.apiService.getCity('Milwaukee')
        .subscribe((data) => this.milwaukeeWeather = this.populateWeatherFields(data, this.milwaukeeWeather));
    }
    else if (city == 'Minneapolis' || city == 'minneapolis') {
      this.apiService.getCity('Minneapolis')
        .subscribe((data) => this.minneapolisWeather = this.populateWeatherFields(data, this.minneapolisWeather));
    }
    else {
      this.apiService.getCity('Milwaukee')
        .subscribe((data) => this.milwaukeeWeather = this.populateWeatherFields(data, this.milwaukeeWeather));
    }
  };
}
