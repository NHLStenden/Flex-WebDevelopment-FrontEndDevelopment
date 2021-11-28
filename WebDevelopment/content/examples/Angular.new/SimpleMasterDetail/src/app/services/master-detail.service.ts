import {Injectable} from '@angular/core';
import {Person} from '../classes/person';
import {Observable, ReplaySubject} from 'rxjs';
import {FakeHttpServiceService} from './fake-http-service.service';

@Injectable({
  providedIn: 'root'
})
export class MasterDetailService {
  private selectedItemSubject: ReplaySubject<Person> = new ReplaySubject<Person>();
  public selectedItem$: Observable<Person> = this.selectedItemSubject.asObservable();

  private itemSubject: ReplaySubject<Person[]> = new ReplaySubject<Person[]>();
  public items$: Observable<Person[]> = this.itemSubject.asObservable();

  public items: Array<Person>;

  constructor(private http: FakeHttpServiceService) {
    this.items = new Array<Person>();
    this.items.push(new Person('Martin', 'Molema'));
    this.items.push(new Person('Pietje', 'Puk'));
    this.items.push(new Person('Jan', 'Klaassen'));
    this.itemSubject.next(this.items);
  }

  public selectItem(item: Person): void {
    this.selectedItemSubject.next(item);
  }

  public increaseAge(item: Person): void {
    item.leeftijd++;
    item.status = 'dirty';
    console.log(item.status);
    this.http.updatePerson(item).subscribe(updatedItem => {
      // what to do with this information? parent is already updated through store.
      console.log(updatedItem.status);
      const pos = this.items.findIndex(p =>
        p.naam === updatedItem.naam && p.achternaam === updatedItem.achternaam);
      if (pos !== -1) {
        // remove the old one in the array
        this.items.splice(pos, 1);
        this.items.push(updatedItem);

        // destruct (spread operator ...) reconstruct the array --> trigger Angular change detection
        // this doesn't work ::> this.items.push(updatedItem);
        // this.items = [...this.items, updatedItem];

        // send the whole array down the line
        this.itemSubject.next(this.items);

        // FIXME:: indicate the new record as the new selection only works in this scenario
        this.selectedItemSubject.next(updatedItem);

      }
    });
  }

  public decreaseAge(item: Person): void {
    item.leeftijd--;
    item.status = 'dirty';
    this.http.updatePerson(item).subscribe(updatedItem => {
      console.log(updatedItem.status);
    });
  }

}
