import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public items: string[] = [];
  public winkelmandje: string[] = [];

  constructor() {
    this.items.push("Dit is aanklikbare tekst 1");
    this.items.push("Dit is aanklikbare tekst 2");
    this.items.push("Dit is aanklikbare tekst 3");
    this.items.push("Dit is aanklikbare tekst 4");
    this.items.push("Dit is aanklikbare tekst 5");
  }

  ngOnInit(): void {
  }

  onClick(event: Event, item: string): void {
    this.winkelmandje.push(item);
  }

}
