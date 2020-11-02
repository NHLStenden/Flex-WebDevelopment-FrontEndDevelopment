import {Component,  OnInit} from '@angular/core';
import {MasterDetailService} from '../services/master-detail.service';
import {Person} from '../classes/person';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /* @Input() selectedItem: Person; */
  public selectedItem$: Observable<Person>;
  public selectedItem: Person;

  constructor(private store: MasterDetailService) { }

  ngOnInit(): void {
    this.selectedItem$ = this.store.selectedItem$;
    this.selectedItem$.subscribe(newSelectedItem => this.selectedItem = newSelectedItem);
  }

  public ageUp(): void {
    this.store.increaseAge(this.selectedItem);
  }

  public ageDown(): void {
    this.store.decreaseAge(this.selectedItem);
  }
}
