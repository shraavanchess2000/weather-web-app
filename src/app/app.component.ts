import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title: string = 'Welcome to the Weather Website!';
  description: string = 'This website displays the weather at the US cities listed below.';
}
