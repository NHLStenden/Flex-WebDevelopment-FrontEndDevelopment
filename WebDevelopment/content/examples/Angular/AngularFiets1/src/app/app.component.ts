import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

class Parkeerlocaties {
  public parkeerlocaties: any;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fietsenstallingen in Amsterdam';

  private url = 'https://open.data.amsterdam.nl/ivv/parkeren/locaties.json';
  public parkeerlocaties: Parkeerlocaties;

  constructor(private http: HttpClient) {  // http client wordt geinjecteerd door middel van Dependency Injection. (een design pattern)

  }

  ngOnInit() {
    const observable = this.http.get<Parkeerlocaties>(this.url);

    observable.subscribe(
      data => {
        console.log('x');
        this.parkeerlocaties = data.parkeerlocaties;
      },
      error => console.log('error!', error)
    );
  }

  public showInfo(adres: string) {
    alert(adres);
  }
}
