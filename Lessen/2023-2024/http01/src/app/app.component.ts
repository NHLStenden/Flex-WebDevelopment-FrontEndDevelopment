import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'http01';
  private fietsenstallingen: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
     const url = 'https://e85bcf2124fb4437b1bc6eb75dfc3abf.objectstore.eu/dcatd/0333b508379b41a394c74d684f1ce782-xxx';
     this.http.get(url).subscribe({
       next: data => {
         this.fietsenstallingen = data;
       },
       error: (err: HttpErrorResponse) => {
          console.log('Niet gelukt');
          switch(err.status) {
            case 404:
              alert('Pagina niet gevonden');
              break;
            case 403:
              // redirect to login page : router.navigate('/login');
            default:
              console.log('Geen idee wat er mis ging.')
          }
       }
     });

  }


}
