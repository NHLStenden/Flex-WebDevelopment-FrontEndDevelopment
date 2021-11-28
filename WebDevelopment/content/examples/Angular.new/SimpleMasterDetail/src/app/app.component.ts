import {Component, OnInit} from '@angular/core';
import {MasterDetailService} from './services/master-detail.service';
import {Person} from './classes/person';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'SimpleMasterDetail';

  public items$: Observable<Person[]>;
  public selectedItem$: Observable<Person>;

  constructor(private store: MasterDetailService) {
  }

  ngOnInit(): void {
    this.items$ = this.store.items$;
    this.selectedItem$ = this.store.selectedItem$;
  }

  public selectItem(item: Person): void {
    this.store.selectItem(item);
  }
}
