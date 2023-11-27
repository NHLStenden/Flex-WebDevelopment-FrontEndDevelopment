import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public counter: number = 0;
  constructor() {
    this.init();
  }

  init(): void {
    this.counter = 10;
  }

  add(): void {
    this.counter++;
  }

  subtract(): void {
    this.counter--;
  }
}
