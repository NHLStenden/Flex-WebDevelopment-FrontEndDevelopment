import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-naam-informatie',
  templateUrl: './naam-informatie.component.html',
  styleUrls: ['./naam-informatie.component.css']
})
export class NaamInformatieComponent implements OnInit, OnChanges {

  @Input() voornaam: string;
  @Input() achternaam: string;

  constructor() { }

  ngOnInit(): void {
    this.voornaam = 'Martin';
    this.achternaam = 'Molema';
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


}
