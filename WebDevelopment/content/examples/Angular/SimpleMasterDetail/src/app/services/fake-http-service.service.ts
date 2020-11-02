import { Injectable } from '@angular/core';
import {Person} from '../classes/person';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpServiceService {

  constructor() { }

  /**
   * This function resembles the HTTP call (async) to a REST API
   * The call will return a NEW person!
   * @param person the person to be updated through a fake HTTP call
   */
  updatePerson(person: Person): Observable<Person> {
    const subPerson = new ReplaySubject<Person>();

    /* FAKE */
    const newPerson = new Person(person.naam, person.achternaam);
    newPerson.leeftijd = person.leeftijd;
    newPerson.status = 'saved';

    // Send the new person through the pipeline (observers will receive it)
    subPerson.next( newPerson );

    // return the ReplaySubject as observable
    return subPerson.asObservable();
  }
}
