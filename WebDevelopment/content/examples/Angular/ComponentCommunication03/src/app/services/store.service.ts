import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private naam: string;
  private stringSubject: Subject<string>;       // https://rxjs.dev/guide/subject
  public naam$: Observable<string>;   // https://rxjs.dev/guide/observable

  constructor() {
    this.naam = 'constructor waarde van de store';
   this.stringSubject = new Subject<string>();
   this.naam$ = this.stringSubject.asObservable();
  }

  initialiseerWaarden(): void {
    this.update("nog niet ingevuld");
  }

  public update(newnaam: string) : void {
    this.naam = newnaam;
    this.stringSubject.next(this.naam);
  }
}
