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
  private parkeerlocaties: Array<any>;

  public parkeerlocaties$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    /*    const observable = this.http.get(this.url);

        observable.subscribe(
          data => this.parkeerlocaties = data.parkeerlocaties,
          error => console.log('error!', error));
  */
    this.parkeerlocaties$ = this.http.get(this.url);
  }

  public showInfo(adres: string) {
    alert(adres);
  }
}
