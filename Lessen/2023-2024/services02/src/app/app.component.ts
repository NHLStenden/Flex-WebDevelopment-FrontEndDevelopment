import {Component, OnInit} from '@angular/core';
import {CounterService} from "./services/counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'services02';

  constructor(public counterService: CounterService) {

  }

  ngOnInit(): void {
    this.counterService.init();
  }

  Up(): void {

    this.counterService.add();
  }

  Down(): void {
    this.counterService.subtract();
  }


}
