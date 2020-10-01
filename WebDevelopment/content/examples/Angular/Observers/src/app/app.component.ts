import {Component, OnInit} from '@angular/core';
import {StoreService} from './services/store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observers';

  public selectedStudent$: Observable<string>;

  constructor(private store: StoreService) {
    this.selectedStudent$ = this.store.geselecteerdeStudent$;

    this.store.geselecteerdeStudent$.subscribe(
      data => console.log(data)
    );
  }

  ngOnInit(): void {  }

}
