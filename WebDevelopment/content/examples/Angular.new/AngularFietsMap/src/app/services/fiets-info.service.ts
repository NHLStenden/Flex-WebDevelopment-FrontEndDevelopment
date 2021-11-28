import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ParkeerLocatie} from '../classes/parkeer-locatie';
import {ParkeerInfo} from '../classes/parkeer-info';

@Injectable({
  providedIn: 'root'
})
export class FietsInfoService {

  URL = 'https://open.data.amsterdam.nl/ivv/parkeren/locaties.json';

  constructor(private http: HttpClient) {
  }

  getFietsInfo(): Observable<Array<ParkeerLocatie>> {
    return this.http.get<Array<ParkeerLocatie>>(this.URL).pipe(
      map((response: any) => {
          console.log(response);
          const locaties = response.parkeerlocaties.map(locatie => new ParkeerLocatie(locatie.parkeerlocatie));
          return locaties;
        }
      ) // map
    ); // pipe
  } // getFietsInfo
} // class
