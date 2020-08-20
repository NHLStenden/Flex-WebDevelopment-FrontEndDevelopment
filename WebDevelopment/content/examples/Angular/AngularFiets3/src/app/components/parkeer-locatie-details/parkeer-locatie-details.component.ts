import {Component, Input, OnChanges, OnInit, SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-parkeer-locatie-details',
  templateUrl: './parkeer-locatie-details.component.html',
  styleUrls: ['./parkeer-locatie-details.component.css']
})
export class ParkeerLocatieDetailsComponent implements OnInit, OnChanges {


  @Input() locatie: any;

  constructor() { }

  ngOnInit() {
    console.log("app-parkeer-locatie-details:: ngOnInit()");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

}
