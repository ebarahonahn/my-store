import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Edgar';
  age = 50;
  img = 'https://source.unsplash.com/random';
}
