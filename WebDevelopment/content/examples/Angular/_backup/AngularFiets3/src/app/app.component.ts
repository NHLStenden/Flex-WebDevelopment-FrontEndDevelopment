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

  public geselecteerdeParkeerlocatie: any;

  public parkeerlocaties$: Observable<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.parkeerlocaties$ = this.http.get(this.url);
  }

  public onClickParkeerlocatie(parkeerlocatie: any) {
    this.geselecteerdeParkeerlocatie = parkeerlocatie;
    // console.log(this.geselecteerdeParkeerlocatie);
  }
}
