import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  // constructor(private http: HttpClient) { }

  constructor() {}

  getStudents(): Observable<string[]> {
    // NORMAAL: return http.get(baseurl + 'students');
    const students = [
      'Martin', 'Bonne', 'Joris'
    ];

    return of(students); // of maakt van array een observable
  }

  saveGeselecteerdeStudent(student: string): Observable<string> {
    console.log(`We gaan de student ${student} opslaan`);
    // return een observable van het resultaat
    return of(student);

    // return this.http.put(student);
  }
}
