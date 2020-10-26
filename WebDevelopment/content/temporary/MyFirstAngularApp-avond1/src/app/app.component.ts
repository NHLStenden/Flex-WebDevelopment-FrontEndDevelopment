import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dit is mijn applicatie';

  public voornaam1: string;
  public achternaam1: string;

  constructor() {
    this.achternaam1 = 'Molema';
    this.voornaam1 = 'Martin';
  }
}
