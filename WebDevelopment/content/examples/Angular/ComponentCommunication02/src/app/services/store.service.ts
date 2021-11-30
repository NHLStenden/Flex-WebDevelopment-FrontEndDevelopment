import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public naam: string;
  constructor() {
    this.naam = 'standaard waarde';
  }
}
