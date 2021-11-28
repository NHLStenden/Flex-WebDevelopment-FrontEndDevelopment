export class Person {
  naam: string;
  achternaam: string;
  leeftijd: number;
  status: string;

  constructor(naam: string, achternaam: string) {
    this.naam = naam;
    this.achternaam = achternaam;
    this.leeftijd = 0;
    this.status = 'new';
  }
}
