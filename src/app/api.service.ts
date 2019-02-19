import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
  key: string = '6b2ee9abff47693382fac0cf7f2b5b9a';
  milwaukeeUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=Milwaukee,us&APPID=' + this.key;
  minneapolisUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=Minneapolis,us&APPID=' + this.key;
  chicagoUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago,us&APPID=' + this.key;
  dallasUrl: string = 'http://api.openweathermap.org/data/2.5/weather?q=Dallas,us&APPID=' + this.key;

  getCity(city: string) {
    if (city == 'Chicago' || city == 'chicago') {
      return this.http.get(this.chicagoUrl);
    }
    else if (city == 'Dallas' || city == 'dallas') {
      return this.http.get(this.dallasUrl);
    }
    else if (city == 'Milwaukee' || city == 'milwaukee') {
      return this.http.get(this.milwaukeeUrl);
    }
    else if (city == 'Minneapolis' || city == 'minneapolis') {
      return this.http.get(this.minneapolisUrl);
    }
    else {
      return this.http.get(this.milwaukeeUrl);
    }
  }
}
