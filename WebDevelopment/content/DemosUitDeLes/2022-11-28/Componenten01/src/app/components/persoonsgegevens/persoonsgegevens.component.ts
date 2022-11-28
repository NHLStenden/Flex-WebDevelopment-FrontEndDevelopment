import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persoonsgegevens',
  templateUrl: './persoonsgegevens.component.html',
  styleUrls: ['./persoonsgegevens.component.css']
})
export class PersoonsgegevensComponent implements OnInit {

  public mijnGeboortedatum: Date;
  public theebericht: string = '';

  constructor() {
    this.mijnGeboortedatum = new Date();
  }

  ngOnInit(): void {
  }

  erIsTheeKlaar(bericht: string): void {
    this.theebericht = bericht;
  }

}
