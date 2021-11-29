import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public naam: string;
  constructor() {
    this.naam = '';
  }

  public updateValue(newnaam: string): void {
    this.naam = newnaam;
  }
}
