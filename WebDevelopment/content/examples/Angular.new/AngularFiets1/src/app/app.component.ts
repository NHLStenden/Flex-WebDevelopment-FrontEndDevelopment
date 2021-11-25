import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

class Parkeerlocaties {
  public parkeerlocaties: any[] = [];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fietsenstallingen in Amsterdam';

  private url = 'https://open.data.amsterdam.nl/ivv/parkeren/locaties.json';
  public parkeerlocaties: Parkeerlocaties | undefined;

  constructor(private http: HttpClient) {  // http client wordt geinjecteerd door middel van Dependency Injection. (een design pattern)
    this.parkeerlocaties = undefined;
  }

  ngOnInit() {
    const observable = this.http.get<Parkeerlocaties>(this.url);
    const that = this;
    observable.subscribe({
      next(data) {
        console.log('x');
        that.parkeerlocaties = data;
      },
      error(errObject) {
        console.log(errObject);
      }
    });
  }

  public showInfo(adres: string) {
    alert(adres);
  }
}
