import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rechts',
  templateUrl: './rechts.component.html',
  styleUrls: ['./rechts.component.css']
})
export class RechtsComponent implements OnInit {

  student$: Observable<string>;

  constructor(private store: StoreService) {
    this.student$ = this.store.geselecteerdeStudent$;
  }

  ngOnInit(): void {
  }

}
