import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-leeftijd',
  templateUrl: './leeftijd.component.html',
  styleUrls: ['./leeftijd.component.css']
})
export class LeeftijdComponent implements OnInit {

  @Input() geboortedatum: Date = new Date();
  @Output() klaar: EventEmitter<string> =new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }

  DeTheeIsKlaar(): void {
    this.klaar.emit('Earl Grey thee');
  }

}
