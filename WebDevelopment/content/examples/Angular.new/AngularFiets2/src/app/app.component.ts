import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fietsenstallingen in Amsterdam';

  private url = 'https://open.data.amsterdam.nl/ivv/parkeren/locaties.json';

  public parkeerlocaties$: Observable<any> | undefined;

  constructor(private http: HttpClient) {
    this.parkeerlocaties$ = undefined;
  }

  ngOnInit() {
    this.parkeerlocaties$ = this.http.get(this.url);
  }

  public showInfo(adres: string) {
    alert(adres);
  }
}
