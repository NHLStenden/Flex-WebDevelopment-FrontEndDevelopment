import {Component, Input, OnInit} from '@angular/core';
import {ParkeerLocatie} from "../../classes/parkeer-locatie";

@Component({
  selector: 'app-parkeerlocatie-details',
  templateUrl: './parkeerlocatie-details.component.html',
  styleUrls: ['./parkeerlocatie-details.component.css']
})
export class ParkeerlocatieDetailsComponent implements OnInit {

  @Input() parkeerlocatie: ParkeerLocatie;

  constructor() { }

  ngOnInit(): void {
    console.log(this.parkeerlocatie);
  }

}
