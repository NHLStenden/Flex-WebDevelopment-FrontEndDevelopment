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
  public selectedItem: Person | undefined;

  constructor(private store: MasterDetailService) {
    this.selectedItem$ = new Observable<Person>( );
    this.selectedItem = undefined;
  }

  ngOnInit(): void {
	// we luisteren naar de observable in de STORE voor het HTML-sjabloon
    this.selectedItem$ = this.store.selectedItem$;

	// we luisteren naar de observable in STORE om een verwijzing te krijgen naar het geselecteerde object
	// ZODAT: we in de ageUp() en ageDown() functie kunnen meegeven welk object (Person) we willen veranderen
    this.selectedItem$.subscribe(newSelectedItem => this.selectedItem = newSelectedItem);
  }

  public ageUp(): void {
	// dit component weet dus niet wat er voor nodig is om de leeftijd te verhogen, of hoe dat werkt.
	// door te luisteren naar de observable in de store, krijgen we uiteindelijk de nieuwe informatie weer terug.
    if (this.selectedItem ) {
      this.store.increaseAge(this.selectedItem);
    }

  }

  public ageDown(): void {
    if (this.selectedItem) {
      this.store.decreaseAge(this.selectedItem);
    }
  }
}
