import { Injectable } from '@angular/core';
import {HttpServiceService} from './http-service.service';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public students: string[];

  // creeer een pijplijn waar je naar kunt luisteren
  private geselecteerdeStudentReplaySubject = new ReplaySubject<string>(1);

  // zorg dat afnemers van de pijplijn de pijplijn als normale Observable kunnen gebruiken.
  public geselecteerdeStudent$ = this.geselecteerdeStudentReplaySubject.asObservable();

  constructor(private http: HttpServiceService) { }

  public getStudenten(): Observable<string[]>{
    return this.http.getStudents();
  }

  public selecteerStudent(student: string): void {
    // stuur de student over de pijplijn
    // eerst opslaan
    // wacht op resultaat van de HTTP-laag via de SUBSCRIBE
    // dan andere componenten informeren dat er een nieuwe selectie is.
    this.http.saveGeselecteerdeStudent(student).subscribe(
      data => this.geselecteerdeStudentReplaySubject.next(student)
    );
  }
}
