import { Component, OnInit } from '@angular/core';
import {Persoon} from "../classes/persoon";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  personen: Array<Persoon>;

  constructor() {
    this.personen = new Array<Persoon>();
    this.personen.push(new Persoon(1, 'Martin Molema'));
    this.personen.push(new Persoon(2, 'Pietje Puk'));
    this.personen.push(new Persoon(3, 'Jan Jansen'));
    this.personen.push(new Persoon(4, 'Klaas Hendriks'));
  }

  ngOnInit(): void {
  }

}
