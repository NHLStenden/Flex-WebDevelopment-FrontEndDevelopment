import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lijst: any | undefined = undefined;
  lijstAsync$: Observable<any> | undefined = undefined;

  title = 'dom3';

  constructor(private http: HttpClient) {
    this.lijstAsync$ = this.http.get('https://stallingsnet.nl/api/3/facility-info/nijmegen');


  }

  ngOnInit(): void {
    this.lijstAsync$?.subscribe(stallingen => {
      this.lijst = stallingen;
      console.log('data ontvangen')
    });
    console.log('Klaar!')
    console.log(this.lijst);
  }

}
