import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'controlflow';
  items: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
  ];
  stallingen : any |  undefined = undefined;


  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const url = 'https://e85bcf2124fb4437b1bc6eb75dfc3abf.objectstore.eu/dcatd/0333b508379b41a394c74d684f1ce782';
    /**
     * Voor demonstratie doeleinden wordt na het openen van de pagina eerst een timer gezet voordat de HTTP-call echt gedaan wordt
     */
    window.setTimeout(() => {
      this.http.get(url).subscribe(
        (data) => {
          /**
           * De gegevens zijn binnen gekomen. we zetten de binnengekomen gegevens nog niet meteen in de class-variabele
           * `stallingen` maar zetten er eerst een lege array in zodat in de HTML-template de @for-lus een lege set
           * krijgt en dus de @empty gebruikt wordt.
           * Na een timer van 4 seconden wordt alsnog het resultaat toegekend waardoor de angular Change Detection de
           * array van stallingen op het scherm zal zetten via de @for lus
           */
          this.stallingen = [];
          window.setTimeout(() => {
            this.stallingen = data;
          }, 4000);
        }
      );

    }, 4000);
  }

}
